import { BranchSummaryBranch, StatusResult } from "simple-git";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Remote = {
  name: string;
  current: boolean;
  refs: {
    fetch: string;
    push: string;
  };
  branches: BranchSummaryBranch[];
};

export interface GitState {
  remotes: Remote[];
  setRemotes: (value: Remote[]) => void;
  gitStatus?: StatusResult;
  setGitStatus: (gitStatus: StatusResult) => void;
}

const useGitStore = create<GitState>()(
  devtools((set) => ({
    remotes: [],
    setRemotes: (remotes) => {
      set({ remotes });
    },
    gitStatus: undefined,
    setGitStatus: (gitStatus) => set({ gitStatus }),
  }))
);

export default useGitStore;
