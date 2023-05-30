import produce, { current } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TabType = "file" | "AST" | "lesson";

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
      set(
        produce((state) => {
          let updatedTabs = state.tabs.filter((tab) => tab.id !== id);

          console.log(
            !updatedTabs.some((tab) => tab.active) && updatedTabs.length > 0,
          );

          // Switch active tab if the deleted tab was active
          if (
            !updatedTabs.some((tab) => tab.active) &&
            updatedTabs.length > 0
          ) {
            state.tabs = updatedTabs.map((tab, index, arr) => {
              return index === arr.length - 1
                ? { ...tab, active: true }
                : { ...tab, active: false };
            });
          } else {
            console.log({ updatedTabs });
            state.tabs = updatedTabs;
          }
        }),
      ),
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
        }),
      ),
    clearToTheRightTabs: (id) =>
      set(
        produce((state: TabsState) => {
          const { tabs } = state;

          const tabIndex = tabs.findIndex((tab) => tab.id === id);

          tabs.splice(tabIndex + 1);
        }),
      ),
  })),
);

export default useTabsStore;
