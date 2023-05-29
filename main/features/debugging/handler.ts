import { ipcMain } from "electron";

import { NASM_EXE_LOCATION } from "../../constants";
import { runCommandInCmd, sendMessageToRenderer } from "../../utils";
import { changeExtension } from "../execution/utils";

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
};

export default debuggingHandler;
