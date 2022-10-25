import { get, set } from "idb-keyval";
import useFileStore, { FileInfo } from "../../../stores/fileStore";
import { verifyPermission } from "../../../utils/fileUtils";

export default function useLoadFile() {
  const setCurrentFile = useFileStore((state) => state.setCurrentFile);
  const currentFile = useFileStore((state) => state.currentFile);

  const openFile = async (_e: any, file: FileInfo) => {
    if (file.kind === "file" && currentFile !== file.name) {
      const fileHandle = (await get(file.name)) as FileSystemFileHandle;
      if (!verifyPermission(fileHandle, true)) {
        console.log("No access to the file system");
        return;
      }
      const fileContent = await fileHandle.getFile();
      const contents = await fileContent.text();
      set("currentFile", contents);
      setCurrentFile(fileContent.name);
    }
  };

  return { currentFile, openFile };
}
