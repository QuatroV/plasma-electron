import { useEffect } from "react";
import { TbPlugConnectedX } from "react-icons/tb";

import useTabsStore from "../../../hooks/tabsStore";
import useLessonStore from "../../../stores/lessonStore";
import useSidebarStore from "../stores/sidebarStore";
import CourseSidebarLessonContents from "./CourseSidebarLessonContents";
import CourseSidebarTasksContent from "./CourseSidebarTasksContent";

const StudySidebar = () => {
  const lesson = useLessonStore((state) => state.lesson);

  const sidebarTab = useSidebarStore((state) => state.tab);
  const tabs = useTabsStore((state) => state.tabs);

  const addTab = useTabsStore((state) => state.addTab);
  const setTab = useTabsStore((state) => state.setActiveTab);

  useEffect(() => {
    if (sidebarTab !== "study" || !lesson) return;
    if (tabs.some((t) => t.type === "lesson")) {
      setTab(tabs.find((t) => t.type === "lesson")!.id);
      return;
    }
    addTab({
      type: "lesson",
      name: lesson.name,
    });
  }, [sidebarTab]);

  if (!lesson)
    return (
      <div className=" flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <TbPlugConnectedX className="text-gray-500" size={100} />
          <div className="mt-2 text-gray-500">
            Cannot find connected lesson!
          </div>
          <button
            onClick={() => null}
            className="rounded-xl border border-gray-400 px-2 py-0.5 transition-all hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-500 hover:text-white active:scale-105 active:shadow"
          >
            Connect with lesson id
          </button>
        </div>
      </div>
    );

  return (
    <div>
      <CourseSidebarLessonContents />
      <CourseSidebarTasksContent />
    </div>
  );
};

export default StudySidebar;
