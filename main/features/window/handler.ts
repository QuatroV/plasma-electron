import { ipcMain } from "electron";

const windowHandler = ({ app, mainWindow }) => {
  ipcMain.handle("quit-app", () => {
    app.quit();
  });

  ipcMain.handle("max-window", () => {
    mainWindow.maximize();
  });

  ipcMain.handle("min-window", () => {
    mainWindow.minimize();
  });
};

export default windowHandler;
