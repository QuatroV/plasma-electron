import { spawn } from "child_process";
import path from "path";
import { dialog, ipcMain } from "electron";

// Константы с путями хранения компилятора и отладчика
const EXTRA_RESOURCES_LOCATION = path.join(__dirname, "..", "extraResources");

const MINGW_LOCATION = path.join(EXTRA_RESOURCES_LOCATION, "MinGW");

const NASM_EXE_LOCATION = path.join(MINGW_LOCATION, "bin", "nasm.exe");

const GDB_EXE_LOCATION = path.join(MINGW_LOCATION, "bin", "gdb.exe");

const OLLY_DBG_EXE_LOCATION = path.join(
  EXTRA_RESOURCES_LOCATION,
  "ollydbg",
  "OLLYDBG.exe",
);

const changeExtension = (file: string, extension?: string) => {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + (extension || ""));
};

// Отправка сообщения в процесс-рендерер
const sendMessageToRenderer = (window, channelName, data?) => {
  window.webContents.send(channelName, data);
};

// Запуск команды в терминале в неинтерактивном режиме
const runCommandInCmd = (commandLine: string) =>
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
const runShellCommand = (params: runShellCommandParams) =>
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

const debuggingHandler = ({ app, mainWindow }) => {
  // Обработчик нажатия на кнопку создания листинга файла
  ipcMain.handle("app:on-create-listing", async (event, args) => {
    const { path } = args;

    try {
      const listingFilePath = changeExtension(path, ".lst");

      // Команда создания листинга для выполнения в терминале
      const createListingCommand = `${NASM_EXE_LOCATION} -f win32 ${path} -l ${listingFilePath}`;

      // Запуск команды создания листинга файла в терминале
      await runCommandInCmd(createListingCommand);
    } catch (error) {
      console.error(`Something went wrong during creating the listing file!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
        );

        // Сообщение об ошибке
        const errorMessage = `Something went wrong during creating the listing file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        // Отправление ошибки в процесс-визуализатор для дальнейшего отображения
        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });

  // Обработчик нажатия на кнопку запуска процесса отладки
  ipcMain.on("app:on-start-debug", async (event, args) => {
    // Вызов диалога для выбора выполняемого файла для отладки
    const dialogResult = await dialog.showOpenDialog({
      title: "Select Executable File",
      properties: ["openFile"],
      filters: [{ name: "Executable Files", extensions: ["exe"] }],
    });

    let filePath;

    // Получение пути к выбранному файлу для отладки
    if (!dialogResult.canceled && dialogResult.filePaths.length > 0) {
      filePath = dialogResult.filePaths[0];
    }

    // Если путь не задан, то выводим ошибку
    if (!filePath) throw new Error("No executable chosen");

    try {
      // Команда запуска процесса отладки в терминала
      const startDebugCommand = `${GDB_EXE_LOCATION} ${filePath}`;

      // Запуск команды в терминале
      await runShellCommand({
        commandLine: startDebugCommand,
        options: {
          // Функция, которая вызывается при выводе в стандартный поток данных
          outputCallback: async (data) => {
            sendMessageToRenderer(mainWindow, "terminal:debug-send-data", {
              data,
            });
          },
          // Функция, которая вызывается при выходе из процесса
          exitCallback: async (data) => {
            sendMessageToRenderer(mainWindow, "app:on-stop-debug", {
              data,
            });
          },
          // Функция, которая вызывается при закрытии процесса
          closeCallback: async (data) => {
            sendMessageToRenderer(mainWindow, "app:on-stop-debug", {
              data,
            });
          },
          // Канал для ввода данных в процесс
          inputChannel: "terminal:debug-fetch-data",
        },
      });
      // Обработка ошибки
    } catch (error) {
      console.error(`Something went wrong during debugging file!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
        );

        const errorMessage = `Something went wrong during debugging the file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });

  // Обработчик нажатия на кнопку запуска отладчика olly-dbg
  ipcMain.on("app:on-start-ollydbg", async (event, args) => {
    // Вызов диалога для выбора выполняемого файла для отладки при помощи olly-dbg
    const dialogResult = await dialog.showOpenDialog({
      title: "Select Executable File",
      properties: ["openFile"],
      filters: [{ name: "Executable Files", extensions: ["exe"] }],
    });

    let filePath;

    if (!dialogResult.canceled && dialogResult.filePaths.length > 0) {
      filePath = dialogResult.filePaths[0];
    }

    if (!filePath) throw new Error("No executable chosen");

    try {
      // Команда для запуска отладки при помощи olly-dbg
      const openOllyDbgCommand = `${OLLY_DBG_EXE_LOCATION} ${filePath}`;

      // Запуск olly-dbg через терминал
      await runCommandInCmd(openOllyDbgCommand);
      // Обработка ошибки
    } catch (error) {
      console.error(`Something went wrong during opening the ollydbg!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
        );

        const errorMessage = `Something went wrong during opening the ollydbg! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });
};

export default debuggingHandler;
