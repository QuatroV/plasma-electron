import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isCreateFileModalOpen: boolean;
  pathToCreateFile: string;
  setIsCreateFileModalOpen: (value: boolean) => void;
  setPathToCreateFile: (value: string) => void;
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
  }))
);

export default useModalStore;
