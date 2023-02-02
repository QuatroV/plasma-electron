import terminalHandler from "./terminal";
import windowHandler from "./window";
import fileSystemHandler from "./fileSystem";
import executionHandler from "./execution";

const rootHandler = ({ mainWindow, app }) => {
  terminalHandler({ mainWindow, app });
  windowHandler({ mainWindow, app });
  fileSystemHandler({ mainWindow, app });
  executionHandler({ mainWindow, app });
};

export default rootHandler;
