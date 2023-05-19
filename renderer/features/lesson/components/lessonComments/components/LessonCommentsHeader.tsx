import { IoIosArrowUp } from "react-icons/io";

import useLessonStore from "../../../../../stores/lessonStore";
import clsxm from "../../../../../utils/clsxm";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const LessonCommentsHeader = ({ isOpen, setOpen }: Props) => {
  const comments = useLessonStore((state) => state.comments);

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
      <h3 className="text-lg font-bold">Comments</h3>
      <p className="text-sm text-gray-500">{comments.length}</p>
    </div>
  );
};

export default LessonCommentsHeader;
