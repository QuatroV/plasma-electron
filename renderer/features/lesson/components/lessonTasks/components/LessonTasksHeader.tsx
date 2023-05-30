import { useMemo } from "react";
import { IoIosArrowUp } from "react-icons/io";

import useLessonStore from "../../../../../stores/lessonStore";
import clsxm from "../../../../../utils/clsxm";
import useSolutionStore from "../stores/solutionsStore";

type Props = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

const LessonTasksHeader = ({ isOpen, setOpen }: Props) => {
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
    <div className="bg-glass flex flex-1 items-center gap-2 rounded-xl p-2">
      <div
        className=" w-fit cursor-pointer rounded-full bg-white p-1 transition-all hover:scale-105 hover:bg-white hover:drop-shadow active:outline active:outline-2 active:outline-emerald-400"
        onClick={() => setOpen(!isOpen)}
      >
        <IoIosArrowUp
          className={clsxm("transition-all", !isOpen ? "rotate-180" : "")}
          size={20}
        />
      </div>
      <h3 className="text-lg font-bold">Tasks</h3>
      <p className="text-sm text-gray-500">
        {completedTasksCount}/{tasks.length} completed
      </p>
    </div>
  );
};

export default LessonTasksHeader;
