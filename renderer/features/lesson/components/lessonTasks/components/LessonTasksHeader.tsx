import { IoIosArrowUp } from "react-icons/io";

import clsxm from "../../../../../utils/clsxm";

type Props = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

const LessonTasksHeader = ({ isOpen, setOpen }: Props) => {
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
      <p className="text-sm text-gray-500">1/3 completed</p>
    </div>
  );
};

export default LessonTasksHeader;
