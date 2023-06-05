import { spawn } from "child_process";
import { ipcMain } from "electron";

export const sendMessageToRenderer = (window, channelName, data?) => {
  window.webContents.send(channelName, data);
};

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

// Interactive version of runCommandInCmd
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

    if (outputCallback) {
      childProcess.stdout.on("data", (data) => {
        outputCallback(data.toString());
      });
    }

    if (errorCallback) {
      childProcess.stderr.on("data", (data) => {
        errorCallback(data);
        reject();
      });

      childProcess.on("error", (data) => {
        errorCallback(data.message);
        reject();
      });

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

    childProcess.on("close", () => {
      if (closeCallback) {
        closeCallback();
      }
      resolve();
    });

    if (inputChannel) {
      ipcMain.on(inputChannel, (event, args) => {
        const { data } = args;
        childProcess.stdin.write(data + "\n");
      });
    }
  });
