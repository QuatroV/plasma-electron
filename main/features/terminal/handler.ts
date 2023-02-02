import { ipcMain } from "electron";
import { shell } from "./constants";

const pty = require("node-pty");

const initPtyProcess = () => {
  const ptyProcess = pty.spawn(shell, [], {
    name: "xterm-color",
    cols: 80,
    rows: 6,
    cwd: process.env.HOME,
    env: process.env,
  });

  return ptyProcess;
};

const terminalHandler = ({ app, mainWindow }) => {
  const ptyProcess = initPtyProcess();

  ptyProcess.onData((data) =>
    mainWindow.webContents.send("terminal:get-data", data)
  );

  ipcMain.on("terminal:send-data", (event, data) => ptyProcess.write(data));
};

export default terminalHandler;
