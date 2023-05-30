import fs from "fs";
import path from "path";
import { dialog, ipcMain } from "electron";

import { sendMessageToRenderer } from "../../utils";
import { buildFileTree } from "./utils";

const fileSystemHandler = ({ app, mainWindow }) => {
  ipcMain.handle("app:on-dir-open", async (event, file) => {
    const dialogReturnValue = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });

    try {
      const rootPath = dialogReturnValue.filePaths[0];

      const fileTree = buildFileTree(rootPath);

      const projectFile = fileTree.items.find((item) => {
        const splittedItemName = item.name.split(".");
        return (
          splittedItemName.at(-1) === "json" &&
          splittedItemName.at(-2) === "plasma"
        );
      });

      if (projectFile) {
        const projectFileContents = await fs.promises.readFile(
          projectFile.path,
        );

        const parsedProjectInfo = JSON.parse(projectFileContents.toString());

        return {
          files: JSON.stringify(fileTree.items),
          rootPath,
          projectFileInfo: {
            lessonId: parsedProjectInfo.lessonId,
            projectName: parsedProjectInfo.name,
            assembly: parsedProjectInfo.assembly,
          },
        };
      }

      return {
        files: JSON.stringify(fileTree.items),
        rootPath,
      };
    } catch (error) {
      console.error(`Something went wrong during opening directory!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
        );

        const errorMessage = `Something went wrong during opening directory! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });

  ipcMain.handle("app:on-create-project", async (event, options) => {
    const dialogReturnValue = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    const rootPath = dialogReturnValue.filePaths[0];

    const projectFileContent = JSON.stringify(options);

    await fs.promises.writeFile(
      `${rootPath}/${options.name}.plasma.json`,
      projectFileContent,
      "utf8",
    );

    const fileTree = buildFileTree(rootPath);

    return {
      files: JSON.stringify(fileTree.items),
      rootPath,
      originalProjectName: options.name,
      lessonId: options.lessonId,
    };
  });

  ipcMain.handle("app:on-file-open", async (event, arg) => {
    const files = await fs.promises.readFile(arg);
    return files;
  });

  ipcMain.handle("app:on-file-save", async (event, arg) => {
    const { filename, data } = arg;
    await fs.promises.writeFile(filename, data);
  });

  ipcMain.handle("app:on-dir-refresh", async (event, arg) => {
    const { rootPath } = arg;

    const fileTree = buildFileTree(rootPath);

    return { files: JSON.stringify(fileTree.items) };
  });

  ipcMain.handle("app:on-file-create", async (event, arg) => {
    const { nameWithExtension, path: pathStr, rootPath } = arg;

    await fs.promises.writeFile(
      path.join(pathStr, nameWithExtension),
      "",
      "utf8",
    );

    const fileTree = buildFileTree(rootPath);

    return { files: JSON.stringify(fileTree.items) };
  });

  ipcMain.handle("app:on-dir-create", async (event, arg) => {
    const { name, path: pathStr, rootPath } = arg;

    await fs.promises.mkdir(path.join(pathStr, name));

    const fileTree = buildFileTree(rootPath);

    return { files: JSON.stringify(fileTree.items) };
  });

  ipcMain.handle("app:on-file-rename", async (event, arg) => {
    const { oldPath, newPath, rootPath } = arg;

    await fs.promises.rename(oldPath, newPath);

    const fileTree = buildFileTree(rootPath);

    return { files: JSON.stringify(fileTree.items) };
  });

  ipcMain.handle("app:on-file-delete", async (event, arg) => {
    const { path, rootPath } = arg;

    await fs.promises.rm(path, { recursive: true, force: true });

    const fileTree = buildFileTree(rootPath);

    return { files: JSON.stringify(fileTree.items) };
  });

  ipcMain.handle("app:on-check-compatibility", async (event, arg) => {
    const { lessonArchitecture, lessonAssembler, directoryPath } = arg;

    try {
      // Read the directory
      const files = await fs.promises.readdir(directoryPath);

      // Find the file with the desired extension
      const regex = /\.plasma\.json$/;
      const jsonFile = files.find((file) => regex.test(file));

      if (!jsonFile) {
        console.log("No .plasma.json file found in the directory.");
        return false;
      }

      // Read the file
      const filePath = path.join(directoryPath, jsonFile);
      const fileContent = await fs.promises.readFile(filePath, "utf8");

      // Parse the JSON data
      const jsonData = JSON.parse(fileContent);

      // Retrieve the values of the desired fields
      const architecture = jsonData.architecture;
      const assembler = jsonData.assembly;

      console.log("Architecture:", architecture);
      console.log("Assembler:", assembler);

      if (
        architecture === lessonArchitecture &&
        assembler === lessonAssembler
      ) {
        console.log("compatibilityCheckPassed");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Something went wrong during comparing meta info!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
        );

        const errorMessage = `Something went wrong during comparing meta info! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });

  ipcMain.handle("app:on-connect-lesson", async (event, arg) => {
    const { lessonId, directoryPath } = arg;

    try {
      const files = await fs.promises.readdir(directoryPath);

      // Find the file with the desired extension
      const regex = /\.plasma\.json$/;
      const jsonFile = files.find((file) => regex.test(file));

      if (!jsonFile) {
        console.log("No .plasma.json file found in the directory.");
        throw new Error("No .plasma.json file found in the directory.");
      }

      // Read the file
      const filePath = path.join(directoryPath, jsonFile);
      const fileContent = await fs.promises.readFile(filePath, "utf8");

      // Parse the JSON data
      const jsonData = JSON.parse(fileContent);

      const updatedJSONstring = JSON.stringify({ ...jsonData, lessonId });

      await fs.promises.writeFile(filePath, updatedJSONstring, "utf8");

      return { success: true };
    } catch (error) {
      console.error(`Something went wrong during comparing meta info!`);

      if (error instanceof Error) {
        console.error(
          `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
        );

        const errorMessage = `Something went wrong during comparing meta info! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

        sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
      }
    }
  });
};

export default fileSystemHandler;
