import { useEffect, useState } from "react";
import { TbRefresh } from "react-icons/tb";

import Tooltip from "../../../components/Tooltip";
import useTabsStore from "../../../hooks/tabsStore";
import useFileStore from "../../../stores/fileStore";
import useLessonStore from "../../../stores/lessonStore";
import { api } from "../../../utils/api";
import clsxm from "../../../utils/clsxm";
import useSolutionStore from "../../lesson/components/lessonTasks/stores/solutionsStore";

const Breadcrumbs = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const rootPath = useFileStore((state) => state.rootPath);

  const activeTab = useTabsStore((state) => state.tabs.find((t) => t.active));

  const lesson = useLessonStore((state) => state.lesson);
  const setLesson = useLessonStore((state) => state.setLesson);
  const setSolutions = useSolutionStore((state) => state.setSolutions);
  const toggleForceRerender = useSolutionStore(
    (state) => state.toggleForceRerender,
  );

  const { data, refetch } = api.lesson.show.useQuery(
    {
      lessonId: lesson?.id || "",
    },
    { enabled: !!lesson?.id },
  );

  const [refreshButtonRotate, setRefreshButtonRotate] = useState(false);

  const handleRefresh = () => {
    setRefreshButtonRotate(true);
    refetch();
  };

  useEffect(() => {
    if (data) {
      setLesson(data.lesson);
      setSolutions(data.solutions);
      toggleForceRerender();
    }
  }, [data]);

  const relativePath = currentFile?.path
    .replace(rootPath, "")
    .replaceAll("\\", "/");

  if (activeTab?.type === "lesson") {
    return (
      <div className="z-50 flex max-h-[23.2px] flex-row items-center gap-2 border-b bg-white px-2 py-1 text-xs font-semibold shadow empty:hidden">
        <Tooltip tooltip={<span>Update lesson info</span>}>
          <TbRefresh
            className={clsxm(
              "rotate-180 cursor-pointer text-gray-700",
              refreshButtonRotate && "animate-one-roll ",
            )}
            size={18}
            onAnimationEnd={() => setRefreshButtonRotate(false)}
            onClick={handleRefresh}
          />
        </Tooltip>
        Course
      </div>
    );
  }

  return (
    <div className="z-50 flex max-h-[23.2px] flex-row items-center justify-between bg-white px-2 py-1 text-xs font-semibold shadow empty:hidden">
      {activeTab ? relativePath : null}
    </div>
  );
};

export default Breadcrumbs;
