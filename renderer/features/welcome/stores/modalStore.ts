import create from "zustand";
import { devtools } from "zustand/middleware";

interface WelcomeModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useWelcomeModalStore = create<WelcomeModalState>()(
  devtools((set) => ({
    isOpen: true,
    setIsOpen: (isOpen: boolean) => {
      set({ isOpen });
    },
  }))
);

export default useWelcomeModalStore;
