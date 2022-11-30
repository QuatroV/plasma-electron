import { ipcRenderer } from "electron";
import useFileStore, { FileInfo } from "../stores/fileStore";

export default function useLoadFile() {
  const setCurrentFile = useFileStore((state) => state.setCurrentFile);
  const currentFile = useFileStore((state) => state.currentFile);
  const setCurrentFileContent = useFileStore(
    (state) => state.setCurrentFileContent
  );
  const addOpenedFile = useFileStore((state) => state.addOpenedFile);
  const openSubdir = useFileStore((state) => state.openSubdir);
  const closeSubdir = useFileStore((state) => state.closeSubdir);
  const openedFiles = useFileStore((state) => state.openedFiles);

  const openFile = async (_e: any, file: FileInfo, appendFile?: boolean) => {
    if (file.kind === "directory") {
      if (file.items.length && file.items[0].visible) {
        closeSubdir(file.path);
      } else {
        openSubdir(file.path);
      }
    }
    if (file.kind === "file") {
      const fileContent = await ipcRenderer.invoke(
        "app:on-file-open",
        file.path
      );

      setCurrentFile(file.name);
      setCurrentFileContent(fileContent);

      if (!openedFiles.find((openedFile) => openedFile.path === file.path)) {
        const { items, ...rest } = file;
        addOpenedFile(rest);
      }
    }
  };

  return { currentFile, openFile };
}
