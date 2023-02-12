import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Tab = "files" | "git";

interface SidebarState {
  tab: Tab;
  setTab: (tab: Tab) => void;
}

const useSidebarStore = create<SidebarState>()(
  devtools((set) => ({
    tab: "files",
    setTab: (tab: Tab) => {
      set({ tab });
    },
  }))
);

export default useSidebarStore;
