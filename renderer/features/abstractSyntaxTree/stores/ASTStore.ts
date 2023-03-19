import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ASTState {
  tree: string;
  setTree: (tree: string) => void;
}

const useASTStore = create<ASTState>()(
  devtools((set) => ({
    tree: "",
    setTree: (tree) => set({ tree }),
  }))
);

export default useASTStore;
