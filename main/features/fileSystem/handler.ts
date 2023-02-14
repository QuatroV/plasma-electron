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

    const projectFile = fileTree.items.find((item) => {
      const splittedItemName = item.name.split(".");
      return (
        splittedItemName.at(-1) === "json" &&
        splittedItemName.at(-2) === "plasma"
      );
    });

    console.log({ projectFile });

    if (projectFile) {
      const projectFileContents = await fs.promises.readFile(projectFile.path);

      console.log("Strnig ", projectFileContents.toString());

      const parsedProjectInfo = JSON.parse(projectFileContents.toString());

      console.log("JSON ", parsedProjectInfo);

      return {
        files: JSON.stringify(fileTree.items),
        rootPath,
        projectFileInfo: {
          projectName: parsedProjectInfo.name,
          assembly: parsedProjectInfo.assembly,
        },
      };
    }

    return {
      files: JSON.stringify(fileTree.items),
      rootPath,
    };
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

  ipcMain.handle("app:on-dir-refresh", async (event, arg) => {
    const { rootPath } = arg;
    const fileTree = new FileTree(rootPath);

    fileTree.build();

    return { files: JSON.stringify(fileTree.items) };
  });
};

export default fileSystemHandler;
