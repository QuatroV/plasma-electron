import { useMemo } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import useLessonStore from "../../../stores/lessonStore";
import useSolutionStore from "../../lesson/components/lessonTasks/stores/solutionsStore";

const CourseSidebarTasksContent = () => {
  const tasks = useLessonStore((state) => state.lesson?.tasks);
  const solutions = useSolutionStore((state) => state.solutions);

  const completedTasksCount = useMemo(() => {
    return tasks.reduce((acc: number, task) => {
      const correspondingSolution = solutions.find(
        (solution) => solution.taskId === task.id,
      );

      if (correspondingSolution && correspondingSolution?.mark > 0) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, []);

  return (
    <div>
      <div className=" my-1 ml-3 text-sm font-bold">Tasks:</div>
      {tasks?.map((task) => {
        const correspondingSolution = solutions.find(
          (solution) => solution.taskId === task.id,
        );

        const isSent = correspondingSolution && !correspondingSolution?.mark;
        const isCompleted =
          correspondingSolution && correspondingSolution?.mark > 0;
        const isRejected =
          correspondingSolution && correspondingSolution?.mark === 0;

        return (
          <div className="relative flex cursor-pointer items-center gap-1 p-1 text-sm hover:bg-gray-300 active:shadow-inner">
            {!isSent && !isCompleted && !isRejected && <FaQuestion />}
            {isSent && <MdSend />}
            {isCompleted && <BsCheckLg />}
            {isRejected && <RxCross1 />}
            {task.name}
          </div>
        );
      })}
      <hr className="ml-1 h-0.5 w-1/4 bg-gray-400" />
      <div className="my-1 ml-1 text-xs italic text-gray-500">
        {completedTasksCount === tasks.length
          ? "Lesson completed"
          : `Lesson not completed (${completedTasksCount || 0}/${
              tasks.length
            })`}
      </div>
    </div>
  );
};

export default CourseSidebarTasksContent;
