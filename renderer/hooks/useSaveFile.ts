import { ipcRenderer } from "electron";
import useFileStore from "../stores/fileStore";

const useSaveFile = () => {
  const rootPath = useFileStore((state) => state.rootPath);
  const currentFile = useFileStore((state) => state.currentFile);
  const currentFileContent = useFileStore((state) => state.currentFileContent);

  const saveFile = async () => {
    await ipcRenderer.invoke("app:on-file-save", {
      filename: `${rootPath}/${currentFile}`,
      data: currentFileContent,
    });
  };

  return { saveFile };
};

export default useSaveFile;
