import { ipcMain } from "electron";
import path from "path";
import { ArrayOf } from "../../../types";
import { sendMessageToRenderer } from "../../utils";
import { buildFileTree } from "../fileSystem/utils";
import { GCC_EXE_LOCATION, NASM_EXE_LOCATION } from "./constants";
import {
  buildFiles,
  changeExtension,
  getExtension,
  linkFiles,
  runCommandInCmd,
} from "./utils";

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

  ipcMain.handle("app:on-build-project", async (event, arg) => {
    const { rootPath } = arg;

    try {
      const fileTree = buildFileTree(rootPath);

      const asmPaths = fileTree
        .getFilesByCondition((file) => getExtension(file.path) === "asm")
        .map((file) => file.path);

      console.log({ asmPaths });

      if (asmPaths.length < 1) {
        console.log("No asm files found");
      }

      const buildOutput = await buildFiles(
        asmPaths as ArrayOf<"at least", 1, string>,
        "win32"
      );

      console.log("File successfully created! The output is: ", buildOutput);
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

  ipcMain.handle("app:on-link-project", async (event, arg) => {
    const { rootPath } = arg;

    try {
      const fileTree = buildFileTree(rootPath);

      const objPaths = fileTree
        .getFilesByCondition((file) => getExtension(file.path) === "obj")
        .map((file) => file.path);

      console.log({ objPaths });

      if (objPaths.length < 1) {
        console.log("No obj files found");
      }

      const linkOutput = await linkFiles(
        objPaths as ArrayOf<"at least", 1, string>,
        path.join(rootPath, "project.exe")
      );

      console.log("File successfully created! The output is: ", linkOutput);
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

  ipcMain.handle("app:on-run-project", async (event, arg) => {});
};

export default executionHandler;
