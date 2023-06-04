import { dialog, ipcMain } from "electron";

import {
  GDB_EXE_LOCATION,
  NASM_EXE_LOCATION,
  OLLY_DBG_EXE_LOCATION,
} from "../../constants";
import {
  runCommandInCmd,
  runShellCommand,
  sendMessageToRenderer,
} from "../../utils";
import { changeExtension } from "../execution/utils";
import { getExecutablePathFromDialog } from "./utils";

const debuggingHandler = ({ app, mainWindow }) => {
  ipcMain.handle("app:on-create-listing", async (event, args) => {
    const { path } = args;

    try {
      const listingFilePath = changeExtension(path, ".lst");

      const createListingCommand = `${NASM_EXE_LOCATION} -f win32 ${path} -l ${listingFilePath}`;

      console.log({ createListingCommand });

      const createLintingFileCommandOutput = await runCommandInCmd(
        createListingCommand,
      );

      console.log({ createLintingFileCommandOutput });
    } catch (error) {
      console.error(`Something went wrong during creating the listing file!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
        );

        const errorMessage = `Something went wrong during creating the listing file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });

  ipcMain.on("app:on-start-debug", async (event, args) => {
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
      const startDebugCommand = `${GDB_EXE_LOCATION} ${filePath}`;

      await runShellCommand({
        commandLine: startDebugCommand,
        options: {
          outputCallback: async (data) => {
            sendMessageToRenderer(mainWindow, "terminal:debug-send-data", {
              data,
            });
            console.log({ data });
          },
          exitCallback: async (data) => {
            sendMessageToRenderer(mainWindow, "app:on-stop-debug", {
              data,
            });
          },
          closeCallback: async (data) => {
            sendMessageToRenderer(mainWindow, "app:on-stop-debug", {
              data,
            });
          },
          inputChannel: "terminal:debug-fetch-data",
        },
      });
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

  ipcMain.on("app:on-start-ollydbg", async (event, args) => {
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
      const openOllyDbgCommand = `${OLLY_DBG_EXE_LOCATION} ${filePath}`;
      await runCommandInCmd(openOllyDbgCommand);
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
