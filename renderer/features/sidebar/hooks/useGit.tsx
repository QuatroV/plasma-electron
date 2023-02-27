import { useState, useEffect, useCallback } from "react";
import useFileStore from "../../../stores/fileStore";
import gitConnector from "../classes/GitConnector";
import useGitStore from "../stores/gitStore";

const useGit = () => {
  const [isRepo, setIsRepo] = useState(false);
  const setGitStatus = useGitStore((state) => state.setGitStatus);
  const rootPath = useFileStore((state) => state.rootPath);

  const remotes = useGitStore((state) => state.remotes);
  const setRemotes = useGitStore((state) => state.setRemotes);

  const syncGitStatus = useCallback(async () => {
    const gitStatus = await gitConnector.getStatus();
    setGitStatus(gitStatus);
  }, [setGitStatus]);

  const initRepo = async () => {
    await gitConnector.initRepo();
    setIsRepo(true);
    syncGitStatus();
  };

  const addRemote = async (remoteName: string, ref: string) => {
    await gitConnector.addRemote(remoteName, ref);
    const remoteBranches = await gitConnector.getRemoteBranches();
    setRemotes(
      remotes.concat({
        name: remoteName,
        current: true,
        refs: { fetch: ref, push: ref },
        branches: remoteBranches,
      })
    );
  };

  const addFilesToStaged = async (fileNames: string[]) => {
    await gitConnector.addFiles(fileNames);
    await syncGitStatus();
  };

  const removeFilesFromStaged = async (fileNames: string[]) => {
    await gitConnector.removeFiles(fileNames);
    await syncGitStatus();
  };

  const commit = async (message: string) => {
    await gitConnector.commit(message);
    await syncGitStatus();
  };

  const push = async () => {
    await gitConnector.push();
    await syncGitStatus();
  };

  const pull = async () => {
    await gitConnector.pull();
    await syncGitStatus();
  };

  const sync = async () => {
    await gitConnector.pull();
    await gitConnector.push();
    await syncGitStatus();
  };

  useEffect(() => {
    if (!rootPath) return;

    const init = async () => {
      await gitConnector.init(rootPath);
      setIsRepo(gitConnector.isRepo);
      setRemotes(gitConnector.remoteUrls);
      if (gitConnector.isRepo) {
        syncGitStatus();
      }
    };

    init();
  }, [rootPath, syncGitStatus, setRemotes]);

  return {
    initRepo,
    isRepo,
    addRemote,
    addFilesToStaged,
    removeFilesFromStaged,
    commit,
    push,
    pull,
    sync,
  };
};

export default useGit;
