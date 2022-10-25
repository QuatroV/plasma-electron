import create from "zustand";
import { devtools } from "zustand/middleware";

export type FileInfo = {
  name: string;
  kind: "directory" | "file";
};

interface FileState {
  currentFile: string;
  files: FileInfo[];
  openedFiles: FileInfo[];
  setFiles: (files: FileInfo[]) => void;
  addFile: (file: FileInfo) => void;
  setCurrentFile: (currentFile: string) => void;
  addOpenedFile: (openedFile: FileInfo) => void;
}

const useFileStore = create<FileState>()(
  devtools((set) => ({
    openedFiles: [],
    currentFile: "",
    files: [],
    setFiles: (files: FileInfo[]) => {
      set({ files });
    },
    addFile: (file: FileInfo) => {
      set((state) => ({ files: state.files.concat(file) }));
    },
    setCurrentFile: (currentFile: string) => {
      set({ currentFile });
    },
    addOpenedFile: (openedFile: FileInfo) => {
      set((state) => ({ files: state.openedFiles.concat(openedFile) }));
    },
  }))
);

export default useFileStore;
