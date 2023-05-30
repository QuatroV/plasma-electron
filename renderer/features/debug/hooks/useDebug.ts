import { ipcRenderer } from "electron";

const useDebug = () => {
  const startDebug = () => {
    ipcRenderer.send("app:on-start-debug");
  };

  return { startDebug };
};

export default useDebug;
