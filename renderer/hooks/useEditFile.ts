import { ipcRenderer } from "electron";
import useFileStore from "../stores/fileStore";

const useEditFile = () => {
  const rootPath = useFileStore((state) => state.rootPath);
  const addFile = useFileStore((state) => state.addFile);
  const clearAllFiles = useFileStore((state) => state.clearAllFiles);

  const renameFile = async (oldPath: string, newPath: string) => {
    const { files } = await ipcRenderer.invoke("app:on-file-rename", {
      oldPath,
      newPath,
      rootPath,
    });

    clearAllFiles();

    const parsedFiles = JSON.parse(files);

    parsedFiles.forEach((fileInfo) => {
      const { name, items, path, nestingLevel, kind } = fileInfo;

      addFile({
        path,
        name,
        items,
        kind,
        visible: nestingLevel === 0,
      });
    });
  };

  const deleteFile = async (path: string) => {
    const { files } = await ipcRenderer.invoke("app:on-file-delete", {
      path,
      rootPath,
    });

    clearAllFiles();

    const parsedFiles = JSON.parse(files);

    parsedFiles.forEach((fileInfo) => {
      const { name, items, path, nestingLevel, kind } = fileInfo;

      addFile({
        path,
        name,
        items,
        kind,
        visible: nestingLevel === 0,
      });
    });
  };

  return { renameFile, deleteFile };
};

export default useEditFile;
