import { resolve } from "path";
import { PLASMA_APP_URL, isProd } from "../../constants";
import { sendMessageToRenderer } from "../../utils";

const deeplinkingHandler = ({ mainWindow, app }) => {
  let deeplinkingUrl;

  if (!isProd && process.platform === "win32") {
    // Set the path of electron.exe and your app.
    // These two additional parameters are only available on windows.
    // Setting this is required to get this working in dev mode.
    app.setAsDefaultProtocolClient(PLASMA_APP_URL, process.execPath, [
      resolve(process.argv[1]),
    ]);
  } else {
    app.setAsDefaultProtocolClient(PLASMA_APP_URL);
  }

  app.on("open-url", function (event, url) {
    event.preventDefault();
    deeplinkingUrl = url;

    // Hack since its taking some time to init page
    setTimeout(() => {
      sendMessageToRenderer(mainWindow, "deeplink:redirect", deeplinkingUrl);
    }, 6000);
  });

  // Force single application instance
  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    app.quit();
    return;
  } else {
    app.on("second-instance", (e, argv) => {
      if (process.platform !== "darwin") {
        // Find the arg that is our custom protocol url and store it
        deeplinkingUrl = argv.find((arg) =>
          arg.startsWith(`${PLASMA_APP_URL}://`)
        );

        // Hack since its taking some time to init page
        setTimeout(() => {
          sendMessageToRenderer(
            mainWindow,
            "deeplink:redirect",
            deeplinkingUrl
          );
        }, 6000);
      }

      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
      }
    });
  }
};

export default deeplinkingHandler;
