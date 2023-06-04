import { ipcRenderer } from "electron";

import useExecutionStore from "../../../stores/executionStore";

const useDebug = () => {
  const setIsDebugging = useExecutionStore((state) => state.setIsDebugging);

  const startDebug = () => {
    ipcRenderer.send("app:on-start-debug");
    setIsDebugging(true);
    ipcRenderer.on("app:on-stop-debug", () => {
      setIsDebugging(false);
    });
  };

  const runDbgCmd = (cmd: string, callback: (data: any) => void) => {
    ipcRenderer.send("terminal:debug-fetch-data", {
      data: cmd,
    });
    ipcRenderer.once("terminal:debug-send-data", (event, data) => {
      callback(data);
    });
  };

  return { startDebug, runDbgCmd };
};

export default useDebug;
