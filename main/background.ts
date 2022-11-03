import { app, ipcMain, ipcRenderer } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

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
})();

app.on("window-all-closed", () => {
  app.quit();
});
