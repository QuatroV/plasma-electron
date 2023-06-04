import { ipcRenderer } from "electron";

const useOllyDbg = () => {
  const startOllyDbg = () => {
    ipcRenderer.send("app:on-start-ollydbg");
  };
  return { startOllyDbg };
};

export default useOllyDbg;
