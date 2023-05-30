import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface executionState {
  isExecuting: boolean;
  setIsExecuting: (isExecuting: boolean) => void;

  isDebugging: boolean;
  setIsDebugging: (isDebugging: boolean) => void;
}

const useExecutionStore = create<executionState>()(
  devtools((set) => ({
    isExecuting: false,
    setIsExecuting: (isExecuting) => {
      set({ isExecuting });
    },

    isDebugging: false,
    setIsDebugging: (isDebugging) => {
      set({ isDebugging });
    },
  })),
);

export default useExecutionStore;
