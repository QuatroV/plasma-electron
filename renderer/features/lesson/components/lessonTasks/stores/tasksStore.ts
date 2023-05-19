import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface tasksState {
  isTaskModalOpen: boolean;
  setIsTaskModalOpen: (isTaskModalOpen: boolean) => void;
}

const useTaskStore = create<tasksState>()(
  devtools((set) => ({
    isTaskModalOpen: false,
    setIsTaskModalOpen: (isTaskModalOpen) => {
      set({ isTaskModalOpen });
    },
  }))
);

export default useTaskStore;
