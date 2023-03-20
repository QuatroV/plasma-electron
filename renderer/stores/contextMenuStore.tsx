import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Point = { x: number; y: number };

type ContextMenuVariant = "explorerDirectory" | "explorerFile" | "tab";

interface ContextMenuState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  point: Point;
  setPoint: (point: Point) => void;
  variant?: ContextMenuVariant;
  setVariant: (variant: ContextMenuVariant) => void;
  contextData: Record<string, any>;
  setContextData: (contextData: Record<string, any>) => void;
}

const useContextMenuStore = create<ContextMenuState>()(
  devtools((set) => ({
    isOpen: true,
    setIsOpen: (isOpen: boolean) => {
      set({ isOpen });
    },
    point: { x: 0, y: 0 },
    setPoint: (point) => {
      set({ point });
    },
    variant: undefined,
    setVariant: (variant) => {
      set({ variant });
    },
    contextData: {},
    setContextData: (contextData) => {
      set({ contextData });
    },
  }))
);

export default useContextMenuStore;
