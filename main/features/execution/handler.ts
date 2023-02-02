import { ipcMain } from "electron";
import fs from "fs";

const executionHandler = ({ mainWindow, app }) => {
  ipcMain.handle("app:on-run-file", async (event, arg) => {
    const { currentFilePath } = arg;
    const files = await fs.promises.readFile(currentFilePath);

    console.log("arg ", arg);

    const NASMpath = `${process.resourcesPath}/../extraResources/NASM`;

    const nasmDir = await fs.promises.readdir(NASMpath);

    // await run(`${TASMpath} ${currentFilePath}`);

    // console.log(tasmDir);
    return files;
  });
};

export default executionHandler;
