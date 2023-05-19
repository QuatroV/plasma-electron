import { useState } from "react";

import useLessonStore from "../../../../../stores/lessonStore";
import clsxm from "../../../../../utils/clsxm";
import LessonTask from "./LessonTask";

type Props = {
  isOpen: boolean;
};

const LessonTasksContent = ({ isOpen }: Props) => {
  const tasks = useLessonStore((state) => state.lesson?.tasks);

  return (
    <div
      className={clsxm(
        "bg-glass rounded-lg transition-all",
        isOpen ? "visible" : "hidden ",
      )}
    >
      <div className="flex flex-col gap-2 rounded-lg bg-white p-4">
        {tasks?.map((task, id) => (
          <LessonTask key={id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default LessonTasksContent;
