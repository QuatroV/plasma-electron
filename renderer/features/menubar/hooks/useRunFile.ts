import { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import useFileStore from "../../../stores/fileStore";

const useRunFile = () => {
  const [currentFileCanBeExecuted, setCurrentFileCanBeExecuted] =
    useState(false);
  const [currentFileCanBeBuild, setCurrentFileCanBeBuild] = useState(false);
  const [currentFileCanBeLinked, setCurrentFileCanBeLinked] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const currentFile = useFileStore((state) => state.currentFile);
  const rootPath = useFileStore((state) => state.rootPath);

  const runFile = async () => {
    if (!currentFileCanBeExecuted) {
      console.error("This file format cant be executed!");
      return;
    }
    setIsExecuting(true);
    await ipcRenderer.invoke("app:on-run-file", {
      currentFilePath: `${rootPath}\\${currentFile.name}`,
    });
    setIsExecuting(false);
  };

  const buildFile = async () => {
    if (!currentFileCanBeBuild) {
      console.error("This file format cant be build!");
      return;
    }
    setIsExecuting(true);
    await ipcRenderer.invoke("app:on-build-file", {
      currentFilePath: `${rootPath}\\${currentFile.name}`,
    });
    setIsExecuting(false);
  };

  const linkFile = async () => {
    if (!currentFileCanBeLinked) {
      console.error("This file format cant be linked!");
      return;
    }
    setIsExecuting(true);
    await ipcRenderer.invoke("app:on-link-file", {
      currentFilePath: `${rootPath}\\${currentFile.name}`,
    });
    setIsExecuting(false);
  };

  const buildProject = async () => {
    setIsExecuting(true);
    await ipcRenderer.invoke("app:on-build-project", {
      rootPath,
    });
    setIsExecuting(false);
  };

  const linkProject = async () => {
    setIsExecuting(true);
    await ipcRenderer.invoke("app:on-link-project", {
      rootPath,
    });
    setIsExecuting(false);
  };

  const buildLinkAndRunProject = async () => {
    setIsExecuting(true);
    await ipcRenderer.invoke("app:on-build-project", {
      rootPath,
    });
    await ipcRenderer.invoke("app:on-link-project", {
      rootPath,
    });
    setIsExecuting(false);
  };

  useEffect(() => {
    if (currentFile) {
      const currentFileExtension = currentFile.name.split(".").pop();
      const isAsmFile = currentFileExtension === "asm";
      const isObjFile = currentFileExtension === "obj";

      setCurrentFileCanBeExecuted(isAsmFile);
      setCurrentFileCanBeBuild(isAsmFile);
      setCurrentFileCanBeLinked(isObjFile);
    }
  }, [currentFile]);

  return {
    runFile,
    currentFileCanBeExecuted,
    currentFileCanBeBuild,
    currentFileCanBeLinked,
    isExecuting,
    buildFile,
    linkFile,
    buildProject,
    linkProject,
    buildLinkAndRunProject,
  };
};

export default useRunFile;
