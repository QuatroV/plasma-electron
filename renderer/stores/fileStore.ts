import create from "zustand";
import { devtools } from "zustand/middleware";

export type FileInfo = {
  name: string;
  kind: "directory" | "file";
};

interface FileState {
  rootPath: string;
  currentFile: string;
  currentFileContent: Uint8Array;
  files: FileInfo[];
  openedFiles: string[];
  setFiles: (files: FileInfo[]) => void;
  addFile: (file: FileInfo) => void;
  setCurrentFile: (currentFile: string) => void;
  addOpenedFile: (openedFile: string) => void;
  clearAllFiles: () => void;
  setCurrentFileContent: (fileContent: Uint8Array) => void;
  setRootPath: (rootPath: string) => void;
  clearOpenedFiles: () => void;
}

const useFileStore = create<FileState>()(
  devtools((set) => ({
    rootPath: "",
    currentFileContent: new Uint8Array(),
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
    addOpenedFile: (openedFile: string) => {
      set((state) => ({ openedFiles: state.openedFiles.concat(openedFile) }));
    },
    clearAllFiles: () => {
      set(() => ({ files: [] }));
    },
    setCurrentFileContent: (fileContent) => {
      set(() => ({ currentFileContent: fileContent }));
    },
    setRootPath: (rootPath) => {
      set(() => ({ rootPath }));
    },
    clearOpenedFiles: () => {
      set(() => ({ openedFiles: [] }));
    },
  }))
);

export default useFileStore;
