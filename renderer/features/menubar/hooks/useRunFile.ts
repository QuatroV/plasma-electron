import { ipcRenderer } from "electron";
import useFileStore from "../../../stores/fileStore";

const useRunFile = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const rootPath = useFileStore((state) => state.rootPath);

  const runFile = async () => {
    console.log(`${rootPath}\\${currentFile.name}`);
    await ipcRenderer.invoke("app:on-run-file", {
      currentFilePath: `${rootPath}\\${currentFile.name}`,
    });
  };

  return { runFile };
};

export default useRunFile;
