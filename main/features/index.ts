import terminalHandler from "./terminal";
import windowHandler from "./window";
import fileSystemHandler from "./fileSystem";
import executionHandler from "./execution";
import { sendMessageToRenderer } from "../utils";

const rootHandler = ({ mainWindow, app }) => {
  try {
    terminalHandler({ mainWindow, app });
    windowHandler({ mainWindow, app });
    fileSystemHandler({ mainWindow, app });
    executionHandler({ mainWindow, app });
  } catch (error) {
    console.error(`Something went wrong during running the file!`);

    if (error instanceof Error) {
      console.error(
        `Here is the error: ${error.name}, ${error.message}, ${error.stack}`
      );

      const errorMessage = `Something went wrong during linking the file! Here is the error: ${error.name}, ${error.message}, ${error.stack}`;

      sendMessageToRenderer(mainWindow, "main-process-error", errorMessage);
    }
  }
};

export default rootHandler;
