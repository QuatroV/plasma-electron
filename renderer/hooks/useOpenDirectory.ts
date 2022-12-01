import { ipcRenderer } from "electron";
import useFileStore from "../stores/fileStore";

const getLastDirFromPath = (path: string) => {
  var arr = path.split("\\");
  var last = arr[arr.length - 1] || arr[arr.length - 2];
  return last;
};

const saveToRecentProjects = (projectInfo: { name: string; path: string }) => {
  const recentProjects = JSON.parse(
    localStorage.getItem("recentProjects") || "[]"
  );

  if (
    !recentProjects.find(
      ({ path: existingPath }) => existingPath === projectInfo.path
    )
  ) {
    recentProjects.push(projectInfo);
  }

  if (recentProjects.length > 5) {
    recentProjects.shift();
  }

  localStorage.setItem("recentProjects", JSON.stringify(recentProjects));
};

export default function useOpenDirectory(callback?: () => void) {
  const addFile = useFileStore((state) => state.addFile);
  const setRootPath = useFileStore((state) => state.setRootPath);
  const clearAllFiles = useFileStore((state) => state.clearAllFiles);
  const clearOpenedFiles = useFileStore((state) => state.clearOpenedFiles);
  const setProjectName = useFileStore((state) => state.setProjectName);

  const openDir = async () => {
    const { files, rootPath } = await ipcRenderer.invoke("app:on-dir-open");

    const projectName = getLastDirFromPath(rootPath);

    saveToRecentProjects({ name: projectName, path: rootPath });

    clearAllFiles();
    clearOpenedFiles();

    setRootPath(rootPath);
    setProjectName(projectName);

    const parsedFiles = JSON.parse(files);

    parsedFiles.forEach((fileInfo) => {
      const { name, items, path, nestingLevel, kind } = fileInfo;

      addFile({
        path,
        name,
        items,
        kind,
        visible: nestingLevel === 0,
      });
    });

    if (callback) {
      callback();
    }
  };

  return { openDir };
}
