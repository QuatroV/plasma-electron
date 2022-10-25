import { set } from "idb-keyval";
import useFileStore from "../stores/fileStore";

export default function useOpenDirectory(callback?: () => void) {
  const addFile = useFileStore((state) => state.addFile);

  const openDir = async () => {
    const directoryHandle = await window.showDirectoryPicker();

    for await (const entry of directoryHandle.values()) {
      addFile({ name: entry.name, kind: entry.kind });
      set(entry.name, entry);
    }

    if (callback) {
      callback();
    }
  };

  return { openDir };
}
