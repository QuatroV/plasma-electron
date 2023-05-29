import { sendMessageToRenderer } from "../utils";
import debuggingHandler from "./debugging";
import deeplinkingHandler from "./deeplinking";
import executionHandler from "./execution";
import fileSystemHandler from "./fileSystem";
import terminalHandler from "./terminal";
import windowHandler from "./window";

const rootHandler = ({ mainWindow, app }) => {
  try {
    deeplinkingHandler({ mainWindow, app });
    terminalHandler({ mainWindow, app });
    windowHandler({ mainWindow, app });
    fileSystemHandler({ mainWindow, app });
    executionHandler({ mainWindow, app });
    debuggingHandler({ mainWindow, app });
  } catch (error) {
    console.error(`Something went wrong during running the file!`);

    if (error instanceof Error) {
      console.error(
        `Here is the error: ${error.name}, ${error.message}, ${error.stack}`,
      );

      const errorMessage = `Something went wrong during linking the file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

      sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
    }
  }
};

export default rootHandler;
