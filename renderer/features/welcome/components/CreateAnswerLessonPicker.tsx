import { useState } from "react";

import Input from "../../../components/Input";
import { api } from "../../../utils/api";

type Props = {
  course: { name: string; id: string };
  lesson: { name: string; id: string };
  setCourse: React.Dispatch<React.SetStateAction<{ name: string; id: string }>>;
  setLesson: React.Dispatch<React.SetStateAction<{ name: string; id: string }>>;
};

const CreateAnswerLessonPicker = ({
  course,
  lesson,
  setCourse,
  setLesson,
}: Props) => {
  const myCourses = api.course.myCourses.useQuery();
  const lessons = api.course.getAllLessons.useQuery(
    { courseId: course.id },
    { enabled: !!course },
  );

  const showLessonPicker = !!course.id;

  const [searchCourse, setSearchCourse] = useState("");
  const [searchLesson, setSearchLesson] = useState("");

  const filteredLessons = lessons.data?.filter((lessonEl) =>
    lessonEl.name.includes(searchLesson),
  );
  const filteredCourses = myCourses.data?.filter((courseEl) =>
    courseEl.name.includes(searchCourse),
  );

  return (
    <div
      className={`animate-slow-appear-no-opacity mb-3 flex h-52 w-full flex-row gap-2 overflow-hidden `}
    >
      <div className="flex w-full flex-col">
        {myCourses.data?.length > 0 && (
          <div className="pb-1 pl-1">
            <Input
              className=" border text-sm "
              placeholder="Search courses..."
              searchable
              onClear={() => setSearchCourse("")}
              value={searchCourse}
              onChange={(e) => setSearchCourse(e.target.value)}
            />
          </div>
        )}
        <ul className=" scrollbar w-full overflow-auto px-1">
          {filteredCourses &&
            filteredCourses.map((courseEl) => (
              <li
                className={`mb-1 flex cursor-pointer flex-row items-center gap-2 rounded p-1 transition-all hover:bg-slate-100 active:outline active:outline-2 active:outline-emerald-400 ${
                  courseEl.id === course.id ? "bg-white" : ""
                }
`}
                onClick={() =>
                  setCourse({ id: courseEl.id, name: courseEl.name })
                }
              >
                {courseEl.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex w-full flex-col">
        {lessons.data?.length > 0 && (
          <div className="pb-1">
            <Input
              className=" border text-sm "
              placeholder="Search lesson..."
              searchable
              onClear={() => setSearchLesson("")}
              value={searchLesson}
              onChange={(e) => setSearchLesson(e.target.value)}
            />
          </div>
        )}
        <ul
          className={` scrollbar w-full overflow-auto rounded ${
            showLessonPicker ? "  animate-slow-appear bg-white" : "invisible"
          }`}
        >
          {filteredLessons &&
            filteredLessons.map((lessonEl) => (
              <li
                className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
                  lesson.id === lessonEl.id ? "font-bold" : ""
                }`}
                onClick={() =>
                  setLesson({ id: lessonEl.id, name: lessonEl.name })
                }
              >
                {lessonEl.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateAnswerLessonPicker;
