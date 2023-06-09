import { spawn } from "child_process";
import { ipcMain } from "electron";

// Отправка сообщения в процесс-рендерер
export const sendMessageToRenderer = (window, channelName, data?) => {
  window.webContents.send(channelName, data);
};

// Запуск команды в терминале в неинтерактивном режиме
export const runCommandInCmd = (commandLine: string) =>
  new Promise<string>((resolve, reject) => {
    const [command, ...args] = commandLine.split(/\s+/);
    const child = spawn(command, args);
    const output = [] as string[];
    child.stdout.on("data", (chunk) => output.push(chunk));
    child.on("close", () => resolve(output.join("").trim()));
    child.stderr.on("data", (error) => {
      const err = new Error(error.toString());

      reject(err);
    });
    child.on("error", (error) => {
      const err = new Error(error.toString());

      reject(err);
    });
  });

type runShellCommandParams = {
  commandLine: string;
  options: {
    outputCallback?: (data?: string) => Promise<void>;
    inputChannel?: string;
    errorCallback?: (data?: string) => Promise<void>;
    exitCallback?: (data?: string) => Promise<void>;
    closeCallback?: (data?: string) => Promise<void>;
  };
};

// Интерактивное выполнение команды в терминале
export const runShellCommand = (params: runShellCommandParams) =>
  new Promise<void>(async (resolve, reject) => {
    const {
      commandLine,
      options: {
        outputCallback,
        inputChannel,
        errorCallback,
        exitCallback,
        closeCallback,
      },
    } = params;

    const [command, ...args] = commandLine.split(/\s+/);
    const childProcess = spawn(command, args);

    // Функция, которая выполняется при получении вывода от процесса в терминале
    if (outputCallback) {
      childProcess.stdout.on("data", (data) => {
        outputCallback(data.toString());
      });
    }

    // Функция, которая выполняется при получении ошибки от процесса в терминале
    if (errorCallback) {
      childProcess.stderr.on("data", (data) => {
        errorCallback(data);
        reject();
      });

      childProcess.on("error", (data) => {
        errorCallback(data.message);
        reject();
      });

      // Функция, которая выполняется при закрытии процесса в терминале
      childProcess.on("exit", (code) => {
        if (code !== 0) {
          errorCallback(`Command failed with code ${code}`);
          reject();
        } else {
          if (exitCallback) {
            exitCallback();
          }
          resolve();
        }
      });
    } else {
      childProcess.on("error", (error) => {
        reject();
      });
    }

    // Функция, которая выполняется при закрытии процесса в терминале
    childProcess.on("close", () => {
      if (closeCallback) {
        closeCallback();
      }
      resolve();
    });

    // Если нужно асинхронно взаимодействовать с запущенным в терминале, то в функцию можно передать название канала, по которому будет производится обмен данными
    if (inputChannel) {
      ipcMain.on(inputChannel, (event, args) => {
        const { data } = args;
        childProcess.stdin.write(data + "\n");
      });
    }
  });
