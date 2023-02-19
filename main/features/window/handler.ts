import { BrowserWindow, ipcMain } from "electron";
import { sendMessageToRenderer } from "../../utils";

const windowHandler = ({ app, mainWindow }) => {
  ipcMain.handle("app:quit-app", () => {
    app.quit();
  });

  ipcMain.handle("window:max-or-unmax", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.handle("window:min", () => {
    mainWindow.minimize();
  });

  (mainWindow as BrowserWindow).addListener("maximize", () =>
    sendMessageToRenderer(mainWindow, "window:state-changed", {
      maximized: true,
    })
  );

  (mainWindow as BrowserWindow).addListener("unmaximize", () =>
    sendMessageToRenderer(mainWindow, "window:state-changed", {
      maximized: false,
    })
  );
};

export default windowHandler;
