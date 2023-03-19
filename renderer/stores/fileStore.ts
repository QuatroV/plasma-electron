import { create } from "zustand";
import { devtools } from "zustand/middleware";
import produce, { current } from "immer";
import { searchTree } from "../utils/treeSearch";

export type FileInfo = {
  path: string;
  name: string;
  kind: "directory" | "file";
  items: FileInfo[] | null;
  visible: boolean;
};

export type FileInfoWithoutNesting = Omit<FileInfo, "items">;

export type SupportedAssemblyLanguage = "nasm";

interface FileState {
  rootPath: string;
  projectName: string;
  projectAssemblyLanguage?: SupportedAssemblyLanguage;
  currentFile: FileInfoWithoutNesting;
  currentFileContent: Uint8Array;
  files: FileInfo[];
  setFiles: (files: FileInfo[]) => void;
  addFile: (file: FileInfo) => void;
  setCurrentFile: (currentFile: FileInfoWithoutNesting) => void;
  clearAllFiles: () => void;
  setCurrentFileContent: (fileContent: Uint8Array) => void;
  setRootPath: (rootPath: string) => void;
  setProjectName: (projectName: string) => void;
  openSubdir: (path: string) => void;
  closeSubdir: (path: string) => void;
  setProjectAssemblyLanguage: (
    projectAssemblyLanguage: SupportedAssemblyLanguage
  ) => void;
}

const useFileStore = create<FileState>()(
  devtools((set) => ({
    projectName: "",
    projectAssemblyLanguage: undefined,
    rootPath: "",
    currentFileContent: new Uint8Array(),
    openedFiles: [],
    currentFile: undefined,
    files: [],
    visibleFiles: [],
    setFiles: (files: FileInfo[]) => {
      set({ files });
    },
    addFile: (file: FileInfo) => {
      set((state) => ({ files: state.files.concat(file) }));
    },
    setCurrentFile: (currentFile: FileInfoWithoutNesting) => {
      set({ currentFile });
    },
    clearAllFiles: () => {
      set(() => ({ files: [], visibleFiles: [] }));
    },
    setCurrentFileContent: (fileContent) => {
      set(() => ({ currentFileContent: fileContent }));
    },
    setRootPath: (rootPath) => {
      set(() => ({ rootPath }));
    },
    setProjectName: (projectName) => {
      set(() => ({ projectName }));
    },
    openSubdir: (path) => {
      set(
        produce((state) => {
          // OPTIMIZE by prasinf paths instead of tree search
          const subdir = searchTree(
            { path: "", items: state.files },
            path,
            "path",
            "items"
          );
          subdir.items.forEach((item) => {
            item.visible = true;
          });
        })
      );
    },
    closeSubdir: (path) => {
      set(
        produce((state) => {
          // OPTIMIZE by prasinf paths instead of tree search
          const subdir = searchTree(
            { path: "", items: state.files },
            path,
            "path",
            "items"
          );
          subdir.items.forEach((item) => {
            item.visible = false;
          });
        })
      );
    },
    setProjectAssemblyLanguage: (
      projectAssemblyLanguage: SupportedAssemblyLanguage
    ) => {
      set((state) => ({ projectAssemblyLanguage }));
    },
  }))
);

export default useFileStore;
