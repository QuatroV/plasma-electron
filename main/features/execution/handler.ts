import { ipcMain } from "electron";
import { sendMessageToRenderer } from "../../utils";
import { GCC_EXE_LOCATION, NASM_EXE_LOCATION } from "./constants";
import { changeExtension, runCommandInCmd } from "./utils";

const executionHandler = ({ mainWindow, app }) => {
  ipcMain.handle("app:on-run-file", async (event, arg) => {
    const { currentFilePath } = arg;

    console.log("arg ", arg);

    try {
      const generateObjCommand = `${NASM_EXE_LOCATION} -f win32 ${currentFilePath}`;

      const nasmObjGenerationOutput = await runCommandInCmd(generateObjCommand);

      console.log(
        "File successfully created! The output is: ",
        nasmObjGenerationOutput
      );

      const objectFilePath = changeExtension(currentFilePath, ".obj");
      const executableFilePath = changeExtension(currentFilePath, ".exe");

      const linkCommand = `${GCC_EXE_LOCATION} ${objectFilePath} -o ${executableFilePath}`;

      console.log("link command ", linkCommand);

      const linkingOutput = await runCommandInCmd(linkCommand);

      console.log({ linkingOutput });

      console.log(
        "Executable successfully created! The output is: ",
        linkingOutput
      );

      const executingOutput = await runCommandInCmd(executableFilePath);

      console.log(
        "Program successfully executed! The output is:",
        executingOutput
      );

      sendMessageToRenderer(
        mainWindow,
        "terminal:output-send-data",
        executingOutput
      );
    } catch (error) {
      console.error(`Something went wrong during running the file!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`
        );

        const errorMessage = `Something went wrong during running the file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });

  ipcMain.handle("app:on-link-file", async (event, arg) => {
    const { currentFilePath } = arg;

    try {
      const executableFilePath = changeExtension(currentFilePath, ".exe");

      const linkCommand = `${GCC_EXE_LOCATION} ${currentFilePath} -o ${executableFilePath}`;

      console.log("link command ", linkCommand);

      const linkingOutput = await runCommandInCmd(linkCommand);

      console.log({ linkingOutput });

      console.log(
        "Object file successfully created! The output is: ",
        linkingOutput
      );
    } catch (error) {
      console.error(`Something went wrong during running the file!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`
        );

        const errorMessage = `Something went wrong during building the file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });

  ipcMain.handle("app:on-build-file", async (event, arg) => {
    const { currentFilePath } = arg;

    try {
      const generateObjCommand = `${NASM_EXE_LOCATION} -f win32 ${currentFilePath}`;

      const nasmObjGenerationOutput = await runCommandInCmd(generateObjCommand);

      console.log(
        "File successfully created! The output is: ",
        nasmObjGenerationOutput
      );
    } catch (error) {
      console.error(`Something went wrong during running the file!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`
        );

        const errorMessage = `Something went wrong during linking the file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });
};

export default executionHandler;
