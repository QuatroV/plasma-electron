import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface authState {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (isOpen: boolean) => void;

  isProfileModalOpen: boolean;
  setIsProfileModalOpen: (isOpen: boolean) => void;
}

const useAuthStore = create<authState>()(
  devtools((set) => ({
    isAuthModalOpen: false,
    setIsAuthModalOpen: (isAuthModalOpen) => {
      set({ isAuthModalOpen });
    },
    isProfileModalOpen: false,
    setIsProfileModalOpen: (isProfileModalOpen) => {
      set({ isProfileModalOpen });
    },
  })),
);

export default useAuthStore;
