import { ipcRenderer } from "electron";
import useFileStore from "../../../stores/fileStore";

const useRefreshDir = () => {
  const rootPath = useFileStore((state) => state.rootPath);
  const addFile = useFileStore((state) => state.addFile);
  const clearAllFiles = useFileStore((state) => state.clearAllFiles);

  const refreshDir = async () => {
    const { files } = await ipcRenderer.invoke("app:on-dir-refresh", {
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

  return { refreshDir };
};

export default useRefreshDir;
