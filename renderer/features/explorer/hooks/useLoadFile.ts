import { ipcRenderer } from "electron";
import useFileStore, { FileInfo } from "../../../stores/fileStore";

export default function useLoadFile() {
  const setCurrentFile = useFileStore((state) => state.setCurrentFile);
  const currentFile = useFileStore((state) => state.currentFile);
  const setCurrentFileContent = useFileStore(
    (state) => state.setCurrentFileContent
  );
  const rootPath = useFileStore((state) => state.rootPath);
  const addOpenedFile = useFileStore((state) => state.addOpenedFile);

  const openFile = async (_e: any, file: FileInfo) => {
    if (file.kind === "file" && currentFile !== file.name) {
      const fileContent = await ipcRenderer.invoke(
        "app:on-file-open",
        `${rootPath}/${file.name}`
      );

      setCurrentFile(file.name);
      setCurrentFileContent(fileContent);
      addOpenedFile(file.name);
    }
  };

  return { currentFile, openFile };
}
