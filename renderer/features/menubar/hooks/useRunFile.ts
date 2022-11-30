import { ipcRenderer } from "electron";
import useFileStore from "../../../stores/fileStore";

const useRunFile = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const rootPath = useFileStore((state) => state.rootPath);

  const runFile = async () => {
    await ipcRenderer.invoke("app:on-run-file", {
      currentFilePath: `${rootPath}\\${currentFile}`,
    });
    console.log(`${rootPath}\\${currentFile}`);
    console.log(process.resourcesPath);
  };

  return { runFile };
};

export default useRunFile;
