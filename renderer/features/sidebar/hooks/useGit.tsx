import { useState, useEffect } from "react";
import useFileStore from "../../../stores/fileStore";
import gitConnector from "../classes/GitConnector";

const useGit = () => {
  const [isRepo, setIsRepo] = useState(false);
  const [gitDiff, setGitDiff] = useState("");
  const rootPath = useFileStore((state) => state.rootPath);

  const initRepo = async () => {
    await gitConnector.initRepo();
    setIsRepo(true);
  };

  useEffect(() => {
    const init = async () => {
      await gitConnector.init(rootPath);
      setIsRepo(gitConnector.isRepo);
      const gitDiff = await gitConnector.getDiff();
      setGitDiff(gitDiff);
    };

    init();
  }, [rootPath]);

  return { initRepo, isRepo, gitDiff };
};

export default useGit;
