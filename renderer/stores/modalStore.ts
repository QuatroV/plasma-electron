import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type FileType = "directory" | "file";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isCreateFileModalOpen: boolean;
  pathToCreateFile: string;
  setIsCreateFileModalOpen: (value: boolean) => void;
  setPathToCreateFile: (value: string) => void;
  createFileType?: FileType;
  setCreateFileType: (createFileType: FileType) => void;
}

const useModalStore = create<ModalState>()(
  devtools((set) => ({
    isOpen: false,
    pathToCreateFile: "",
    isCreateFileModalOpen: false,
    setIsOpen: (isOpen: boolean) => {
      set({ isOpen });
    },
    setIsCreateFileModalOpen: (isCreateFileModalOpen) => {
      set({ isCreateFileModalOpen });
    },
    setPathToCreateFile: (pathToCreateFile) => {
      set({ pathToCreateFile });
    },
    createFileType: undefined,
    setCreateFileType: (createFileType) => {
      set({ createFileType });
    },
  }))
);

export default useModalStore;
