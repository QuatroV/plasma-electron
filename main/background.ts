import { app, dialog, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import fs from "fs";
import { spawn } from "child_process";
import FileTree from "./helpers/FileTree";

const isProd: boolean = process.env.NODE_ENV === "production";

const run = (commandLine: string) =>
  new Promise<string>((resolve, reject) => {
    const [command, ...args] = commandLine.split(/\s+/);
    const child = spawn(command, args);
    const output = [] as string[];
    child.stdout.on("data", (chunk) => output.push(chunk));
    child.on("close", () => resolve(output.join("").trim()));
    child.on("error", (error) => reject(error));
  });

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    frame: false,
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  ipcMain.handle("quit-app", () => {
    app.quit();
  });

  ipcMain.handle("max-window", () => {
    mainWindow.maximize();
  });

  ipcMain.handle("min-window", () => {
    mainWindow.minimize();
  });

  ipcMain.handle("app:on-dir-open", async (event, file) => {
    const dialogReturnValue = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    const rootPath = dialogReturnValue.filePaths[0];

    const fileTree = new FileTree(rootPath);

    fileTree.build();

    return { files: JSON.stringify(fileTree.items), rootPath };
  });

  ipcMain.handle("app:on-file-open", async (event, arg) => {
    const files = await fs.promises.readFile(arg);
    return files;
  });

  ipcMain.handle("app:on-file-save", async (event, arg) => {
    const { filename, data } = arg;
    await fs.promises.writeFile(filename, data);
  });

  ipcMain.handle("app:on-run-file", async (event, arg) => {
    const { currentFilePath } = arg;
    const files = await fs.promises.readFile(currentFilePath);

    console.log("arg ", arg);

    const TASMpath = `${process.resourcesPath}/../extraResources`;

    const tasmDir = await fs.promises.readdir(TASMpath);

    // await run(`${TASMpath} ${currentFilePath}`);

    console.log(tasmDir);
    return files;
  });
})();

app.on("window-all-closed", () => {
  app.quit();
});
