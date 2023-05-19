import { MdOutlinePlayLesson } from "react-icons/md";

import useLessonStore from "../../../../../stores/lessonStore";

const LessonInfoHeader = () => {
  const lesson = useLessonStore((state) => state.lesson);

  return (
    <div className="flex items-center justify-between gap-2 ">
      <div className=" bg-glass flex flex-1 items-center gap-2 rounded-xl p-2">
        <div className=" rounded-full bg-white p-2">
          <MdOutlinePlayLesson size={28} />
        </div>
        <div className="flex flex-col gap-0">
          <div className="text-sm text-gray-500 ">Course</div>
          <h1 className="text-2xl font-bold">{lesson?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default LessonInfoHeader;
