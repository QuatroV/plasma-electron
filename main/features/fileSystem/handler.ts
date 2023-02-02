import { dialog, ipcMain } from "electron";
import FileTree from "./FileTree";
import fs from "fs";

const fileSystemHandler = ({ app, mainWindow }) => {
  ipcMain.handle("app:on-dir-open", async (event, file) => {
    const dialogReturnValue = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    const rootPath = dialogReturnValue.filePaths[0];

    const fileTree = new FileTree(rootPath);

    fileTree.build();

    return { files: JSON.stringify(fileTree.items), rootPath };
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
      "utf8"
    );

    const fileTree = new FileTree(rootPath);

    fileTree.build();

    return {
      files: JSON.stringify(fileTree.items),
      rootPath,
      originalProjectName: options.name,
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
};

export default fileSystemHandler;
