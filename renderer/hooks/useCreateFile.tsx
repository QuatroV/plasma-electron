import { ipcRenderer } from "electron";
import useFileStore from "../stores/fileStore";

const useCreateFile = () => {
  const rootPath = useFileStore((state) => state.rootPath);
  const addFile = useFileStore((state) => state.addFile);
  const clearAllFiles = useFileStore((state) => state.clearAllFiles);

  const createFile = async (path, nameWithExtension) => {
    const { files } = await ipcRenderer.invoke("app:on-file-create", {
      path,
      nameWithExtension,
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

  const createFolder = async (path, name) => {
    const { files } = await ipcRenderer.invoke("app:on-dir-create", {
      path,
      name,
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

  return { createFile, createFolder };
};

export default useCreateFile;
