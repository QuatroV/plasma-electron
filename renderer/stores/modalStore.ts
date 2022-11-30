import create from "zustand";
import { devtools } from "zustand/middleware";

export type Stage = "welcome" | "createProject";

interface WelcomeModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  stage: Stage;
  setStage: (stage: Stage) => void;
}

const useWelcomeModalStore = create<WelcomeModalState>()(
  devtools((set) => ({
    isOpen: true,
    setIsOpen: (isOpen: boolean) => {
      set({ isOpen });
    },
    stage: "welcome",
    setStage: (stage) => {
      set({ stage });
    },
  }))
);

export default useWelcomeModalStore;
