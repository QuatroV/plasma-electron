import { useState, useEffect, useCallback } from "react";
import useFileStore from "../../../stores/fileStore";
import gitConnector from "../classes/GitConnector";
import useGitStore from "../stores/gitStore";

const useGit = () => {
  const [isRepo, setIsRepo] = useState(false);
  const gitStatus = useGitStore((state) => state.gitStatus);
  const setGitStatus = useGitStore((state) => state.setGitStatus);
  const rootPath = useFileStore((state) => state.rootPath);

  const remotes = useGitStore((state) => state.remotes);
  const setRemotes = useGitStore((state) => state.setRemotes);

  const initRepo = async () => {
    await gitConnector.initRepo();
    setIsRepo(true);
  };

  const syncGitStatus = useCallback(async () => {
    const gitStatus = await gitConnector.getStatus();
    setGitStatus(gitStatus);
  }, [setGitStatus]);

  const addRemote = async (remoteName: string, url: string) => {
    await gitConnector.addRemote(remoteName, url);
    setRemotes(remotes.concat({ name: remoteName, url }));
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

  useEffect(() => {
    const init = async () => {
      await gitConnector.init(rootPath);
      setIsRepo(gitConnector.isRepo);
      syncGitStatus();
    };

    init();
  }, [rootPath, syncGitStatus]);

  return {
    initRepo,
    isRepo,
    gitStatus,
    addRemote,
    addFilesToStaged,
    removeFilesFromStaged,
    commit,
  };
};

export default useGit;
