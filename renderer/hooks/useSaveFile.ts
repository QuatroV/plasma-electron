import { ipcRenderer } from "electron";
import useFileStore from "../stores/fileStore";

const useSaveFile = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const currentFileContent = useFileStore((state) => state.currentFileContent);

  const saveFile = async () => {
    await ipcRenderer.invoke("app:on-file-save", {
      filename: currentFile.path,
      data: currentFileContent,
    });
  };

  return { saveFile };
};

export default useSaveFile;
