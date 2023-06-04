import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface DebugState {
  registers: Record<string, { hexValue: string; info: string }>;
  setRegisters: (
    registers: Record<string, { hexValue: string; info: string }>,
  ) => void;
  flags: string[];
  setFlags: (flags: string[]) => void;
  breakpoints: (string | number)[];
  addBreakpoint: (breakpoint: string | number) => void;
  removeBreakpoint: (breakpoint: string | number) => void;
  clearBreakpoints: () => void;
}

const useDebugStore = create<DebugState>()(
  devtools((set) => ({
    registers: {},
    setRegisters: (registers) => set({ registers }),
    flags: [],
    setFlags: (flags) => set({ flags }),
    breakpoints: [],
    addBreakpoint: (breakpoint) =>
      set((state) => ({ breakpoints: [...state.breakpoints, breakpoint] })),
    removeBreakpoint: (breakpoint) =>
      set((state) => ({
        breakpoints: state.breakpoints.filter((b) => b !== breakpoint),
      })),
    clearBreakpoints: () => set({ breakpoints: [] }),
  })),
);

export default useDebugStore;
