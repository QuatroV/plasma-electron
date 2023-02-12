import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useModalStore = create<ModalState>()(
  devtools((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => {
      set({ isOpen });
    },
  }))
);

export default useModalStore;
