import { stat } from "fs";
import { useEffect, useState } from "react";
import { ipcRenderer } from "electron";

import useFileStore, {
  SupportedAssemblyLanguage,
} from "../../../stores/fileStore";
import useLessonStore from "../../../stores/lessonStore";
import { api } from "../../../utils/api";
import useSolutionStore from "../../lesson/components/lessonTasks/stores/solutionsStore";

interface CreateProjectOptions {
  name: string;
  architecture: string;
  assembly: string;
  lessonId?: string;
}

const getLastDirFromPath = (path: string) => {
  var arr = path.split("\\");
  var last = arr[arr.length - 1] || arr[arr.length - 2];
  return last;
};

const saveToRecentProjects = (projectInfo: { name: string; path: string }) => {
  const recentProjects = JSON.parse(
    localStorage.getItem("recentProjects") || "[]",
  );

  if (
    !recentProjects.find(
      ({ path: existingPath }) => existingPath === projectInfo.path,
    )
  ) {
    recentProjects.push(projectInfo);
  }

  if (recentProjects.length > 5) {
    recentProjects.shift();
  }

  localStorage.setItem("recentProjects", JSON.stringify(recentProjects));
};

const useCreateProject = (callback?: () => void) => {
  const addFile = useFileStore((state) => state.addFile);
  const setRootPath = useFileStore((state) => state.setRootPath);
  const clearAllFiles = useFileStore((state) => state.clearAllFiles);
  const setProjectName = useFileStore((state) => state.setProjectName);
  const setProjectAssemblyLanguage = useFileStore(
    (state) => state.setProjectAssemblyLanguage,
  );

  const setLesson = useLessonStore((state) => state.setLesson);
  const setSolutions = useSolutionStore((state) => state.setSolutions);

  const [fetchInfoId, setFetchInfoId] = useState<string>();

  const { data } = api.lesson.show.useQuery(
    { lessonId: fetchInfoId },
    { enabled: !!fetchInfoId },
  );

  useEffect(() => {
    if (data) {
      setLesson(data.lesson);
      setSolutions(data.solutions);
    }
  }, [data]);

  const createProject = async (options: CreateProjectOptions) => {
    const { files, rootPath, originalProjectName, lessonId } =
      await ipcRenderer.invoke("app:on-create-project", options);

    if (lessonId) {
      setFetchInfoId(lessonId);
    }

    const projectName = originalProjectName || getLastDirFromPath(rootPath);

    saveToRecentProjects({ name: projectName, path: rootPath });

    clearAllFiles();

    setRootPath(rootPath);
    setProjectName(projectName);
    setProjectAssemblyLanguage(options.assembly as SupportedAssemblyLanguage);

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

  return { createProject };
};

export default useCreateProject;
