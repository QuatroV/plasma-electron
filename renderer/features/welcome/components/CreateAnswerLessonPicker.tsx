import { api } from "../../../utils/api";

type Props = {
  course: string;
  lesson: string;
  setCourse: React.Dispatch<React.SetStateAction<string>>;
  setLesson: React.Dispatch<React.SetStateAction<string>>;
};

const CreateAnswerLessonPicker = ({
  course,
  lesson,
  setCourse,
  setLesson,
}: Props) => {
  const myCourses = api.course.myCourses.useQuery();

  const isChosen = true;
  const showLessonPicker = !!course;

  return (
    <div>
      <div
        className={`animate-slow-appear-no-opacity mb-3 flex flex-row gap-2`}
      >
        <ul className=" flex-2 w-full">
          {myCourses.data &&
            myCourses.data.map((course) => (
              <li
                className={`mb-1 flex cursor-pointer flex-row items-center gap-2 rounded p-1 transition-all hover:bg-slate-100 active:outline active:outline-2 active:outline-emerald-400 ${
                  isChosen ? "bg-white" : ""
                }
`}
                onClick={() => null}
              >
                x86
              </li>
            ))}
        </ul>

        {/* <ul
          className={`flex-2 once w-full rounded ${
            showLessonPicker ? "  animate-slow-appear bg-white" : "invisible"
          }`}
        >
          <li
            className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
              assembly === "masm" ? "font-bold" : ""
            }`}
            onClick={() => setAssembly("masm")}
          >
            MASM
          </li>
          <li
            className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
              assembly === "nasm" ? "font-bold" : ""
            }`}
            onClick={() => setAssembly("nasm")}
          >
            NASM
          </li>

          <li
            className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
              assembly === "avr-gcc" ? "font-bold" : ""
            }`}
            onClick={() => setAssembly("avr-gcc")}
          >
            AVR-GCC
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default CreateAnswerLessonPicker;
