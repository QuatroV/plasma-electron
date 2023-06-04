import { ipcRenderer } from "electron";

import useFileStore, { FileInfo } from "../stores/fileStore";
import useTabsStore from "./tabsStore";

export default function useLoadFile() {
  const setCurrentFile = useFileStore((state) => state.setCurrentFile);
  const currentFile = useFileStore((state) => state.currentFile);
  const setCurrentFileContent = useFileStore(
    (state) => state.setCurrentFileContent,
  );
  const addTab = useTabsStore((state) => state.addTab);
  const openSubdir = useFileStore((state) => state.openSubdir);
  const closeSubdir = useFileStore((state) => state.closeSubdir);
  const tabs = useTabsStore((state) => state.tabs);
  const setActiveTab = useTabsStore((state) => state.setActiveTab);

  const openFile = async (_e: any, file: FileInfo) => {
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
        file.path,
      );

      const { items, ...rest } = file;

      setCurrentFile(rest);
      setCurrentFileContent(fileContent);

      if (!tabs.find((tab) => tab.path === file.path)) {
        addTab({ ...rest, type: "file" });
      } else {
        setActiveTab(tabs.find((tab) => tab.path === file.path).id);
      }
    }
  };

  return { currentFile, openFile };
}
