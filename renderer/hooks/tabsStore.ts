import produce, { current } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TabType = "file" | "AST";

export type Tab = {
  id: string;
  name: string;
  path?: string;
  active: boolean;
  type: TabType;
};

interface TabsState {
  tabs: Tab[];
  addTab: (tab: Omit<Tab, "id" | "active">) => void;
  setActiveTab: (id: string) => void;
  deleteTab: (id: string) => void;
  clearTabs: () => void;
  reorderTabs: (firstId: string, secondId: string) => void;
  clearToTheRightTabs: (id: string) => void;
}

const useTabsStore = create<TabsState>()(
  devtools((set) => ({
    tabs: [],
    addTab: (tab) =>
      set((state) => {
        const id = tab.path ? tab.path : tab.name;
        const tabWithId = { ...tab, id, active: true };
        return {
          tabs: state.tabs
            .map((tab) => ({ ...tab, active: false }))
            .concat([tabWithId]),
        };
      }),
    setActiveTab: (id) =>
      set((state) => ({
        tabs: state.tabs.map((tab) => {
          return tab.id === id
            ? { ...tab, active: true }
            : { ...tab, active: false };
        }),
      })),
    deleteTab: (id) =>
      set((state) => ({ tabs: state.tabs.filter((tab) => tab.id !== id) })),
    clearTabs: () => set({ tabs: [] }),
    reorderTabs: (firstId, secondId) =>
      set(
        produce((state: TabsState) => {
          const { tabs } = state;

          const firstTabIndex = tabs.findIndex((tab) => tab.id === firstId);
          const secondTabIndex = tabs.findIndex((tab) => tab.id === secondId);

          [tabs[firstTabIndex], tabs[secondTabIndex]] = [
            tabs[secondTabIndex],
            tabs[firstTabIndex],
          ];
        })
      ),
    clearToTheRightTabs: (id) =>
      set(
        produce((state: TabsState) => {
          const { tabs } = state;

          const tabIndex = tabs.findIndex((tab) => tab.id === id);

          console.log({ tabIndex });

          tabs.splice(tabIndex + 1);
        })
      ),
  }))
);

export default useTabsStore;
