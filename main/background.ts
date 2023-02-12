import { app } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import rootEventsHandler from "./features";
import { isProd } from "./constants";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const loadingWindow = createWindow("loading-app", {
    icon: "resources/blob-logo.png",
    frame: false,
    width: 300,
    height: 250,
  });
  loadingWindow.setResizable(false);

  const mainWindow = createWindow("main", {
    icon: "resources/blob-logo.png",
    frame: false,
    width: 1000,
    height: 600,
    show: false,
  });

  if (isProd) {
    await loadingWindow.loadURL("app://./loading.html");
    setTimeout(() => {
      loadingWindow.close();
      mainWindow.show();
    }, 3000);
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await loadingWindow.loadURL(`http://localhost:${port}/loading`);
    setTimeout(() => {
      loadingWindow.close();
      mainWindow.show();
    }, 3000);
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  rootEventsHandler({ app, mainWindow });
})();

app.on("window-all-closed", () => {
  app.quit();
});
