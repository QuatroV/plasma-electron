import { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import useFileStore from "../../../stores/fileStore";

const useRunFile = () => {
  const [currentFileCanBeExecuted, setCurrentFileCanBeExecuted] =
    useState(false);
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

  useEffect(() => {
    if (currentFile) {
      setCurrentFileCanBeExecuted(currentFile.name.split(".").pop() === "asm");
    }
  }, [currentFile]);

  return { runFile, currentFileCanBeExecuted, isExecuting };
};

export default useRunFile;
