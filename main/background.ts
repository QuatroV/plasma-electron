import { app, dialog, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import fs from "fs";

const isProd: boolean = process.env.NODE_ENV === "production";

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

    const files = await fs.promises.readdir(rootPath);
    return { files: files, rootPath };
  });

  ipcMain.handle("app:on-file-open", async (event, arg) => {
    const files = await fs.promises.readFile(arg);
    return files;
  });

  ipcMain.handle("app:on-file-save", async (event, arg) => {
    const { filename, data } = arg;
    await fs.promises.writeFile(filename, data);
  });
})();

app.on("window-all-closed", () => {
  app.quit();
});
