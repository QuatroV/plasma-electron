import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type FileType = "directory" | "file";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fileType?: FileType;
  setFileType: (createFileType: FileType) => void;
  pathToFile: string;
  setPathToFile: (value: string) => void;
}

const useApproveDeleteModalStore = create<ModalState>()(
  devtools((set) => ({
    isOpen: false,
    pathToFile: "",
    isCreateFileModalOpen: false,
    setIsOpen: (isOpen) => {
      set({ isOpen });
    },
    setPathToFile: (pathToFile) => {
      set({ pathToFile });
    },
    fileType: undefined,
    setFileType: (fileType) => {
      set({ fileType });
    },
  }))
);

export default useApproveDeleteModalStore;
