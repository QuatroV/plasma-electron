import { useEffect, useState } from "react";

import useLessonStore from "../../../stores/lessonStore";
import useTabsStore from "../../../stores/tabsStore";
import useSidebarStore from "../stores/sidebarStore";
import ConnectToLessonForm from "./ConnectToLessonForm";
import CourseSidebarLessonContents from "./CourseSidebarLessonContents";
import CourseSidebarTasksContent from "./CourseSidebarTasksContent";
import NoLessonPlaceholder from "./NoLessonPlaceholder";

const StudySidebar = () => {
  const lesson = useLessonStore((state) => state.lesson);

  const [isConnectingWithLesson, setIsConnectingWithLesson] = useState(false);

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

  if (isConnectingWithLesson) {
    return (
      <ConnectToLessonForm onCreate={() => setIsConnectingWithLesson(false)} />
    );
  }

  if (!lesson)
    return (
      <NoLessonPlaceholder
        onButtonClick={() => setIsConnectingWithLesson(true)}
      />
    );

  return (
    <div className="animate-slow-appear">
      <CourseSidebarLessonContents />
      <CourseSidebarTasksContent />
    </div>
  );
};

export default StudySidebar;
