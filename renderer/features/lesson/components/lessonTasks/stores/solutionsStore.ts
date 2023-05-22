import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { type SolutionForClient } from "@plasma/api/src/routers/task";

interface solutionState {
  solutions?: SolutionForClient[];
  setSolutions: (solutions: SolutionForClient[]) => void;

  forceRerender: boolean;
  toggleForceRerender: () => void;
}

const useSolutionStore = create<solutionState>()(
  devtools((set) => ({
    solutions: [],
    setSolutions: (solutions) => set({ solutions }),

    forceRerender: false,
    toggleForceRerender: () =>
      set((state) => ({ forceRerender: !state.forceRerender })),
  })),
);
export default useSolutionStore;
