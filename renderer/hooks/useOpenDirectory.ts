import { ipcRenderer } from "electron";
import useFileStore from "../stores/fileStore";

const getLastDirFromPath = (path: string) => {
  var arr = path.split("\\");
  var last = arr[arr.length - 1] || arr[arr.length - 2];
  return last;
};

export default function useOpenDirectory(callback?: () => void) {
  const addFile = useFileStore((state) => state.addFile);
  const setRootPath = useFileStore((state) => state.setRootPath);
  const clearAllFiles = useFileStore((state) => state.clearAllFiles);
  const clearOpenedFiles = useFileStore((state) => state.clearOpenedFiles);
  const setProjectName = useFileStore((state) => state.setProjectName);

  const openDir = async () => {
    const { files, rootPath } = await ipcRenderer.invoke("app:on-dir-open");

    clearAllFiles();
    clearOpenedFiles();

    setRootPath(rootPath);
    setProjectName(getLastDirFromPath(rootPath));

    files.forEach((filename) => {
      const extensionRegExp = /(?:\.([^.]+))?$/;
      const extension = extensionRegExp.exec(filename)[1];
      addFile({
        name: filename,
        kind: extension === undefined ? "directory" : "file",
      });
    });

    if (callback) {
      callback();
    }
  };

  return { openDir };
}
