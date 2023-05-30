import { useEffect, useState } from "react";
import { ipcRenderer } from "electron";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { TbPlugConnected } from "react-icons/tb";
import z from "zod";

import Button from "../../../components/Button";
import useTabsStore from "../../../hooks/tabsStore";
import useFileStore from "../../../stores/fileStore";
import useLessonStore from "../../../stores/lessonStore";
import { api } from "../../../utils/api";
import clsxm from "../../../utils/clsxm";
import useSolutionStore from "../../lesson/components/lessonTasks/stores/solutionsStore";

const metaSchema = z.object({
  architecture: z.string().nonempty(),
  assembler: z.string().nonempty(),
});

type Props = {
  onCreate: () => void;
};

const ConnectToLessonForm = ({ onCreate }: Props) => {
  const myCourses = api.course.myCourses.useQuery();

  const [course, setCourse] = useState<{ name: string; id: string }>({
    name: "",
    id: "",
  });

  const [lesson, setLesson] = useState<{ name: string; id: string }>({
    name: "",
    id: "",
  });

  const [meta, setMeta] = useState({ architecture: "", assembler: "" });

  const lessons = api.course.getAllLessons.useQuery(
    { courseId: course.id },
    { enabled: !!course.id },
  );

  const [canBeCreated, setCanBeCreated] = useState(false);

  const rootPath = useFileStore((state) => state.rootPath);

  const handleCheckCompatibility = async () => {
    if (!meta.architecture && !meta.assembler) {
      setCanBeCreated(true);
      return;
    }
    if (!meta.architecture || !meta.assembler) {
      return;
    }

    const resultOfComparison = await ipcRenderer.invoke(
      "app:on-check-compatibility",
      {
        lessonArchitecture: meta.architecture,
        lessonAssembler: meta.assembler,
        directoryPath: rootPath,
      },
    );

    setCanBeCreated(resultOfComparison);
  };

  const { data } = api.lesson.show.useQuery(
    { lessonId: lesson.id },
    { enabled: !!lesson.id },
  );

  const currentLesson = useLessonStore((state) => state.lesson);
  const setCurrentLesson = useLessonStore((state) => state.setLesson);
  const setSolutions = useSolutionStore((state) => state.setSolutions);

  const addTab = useTabsStore((state) => state.addTab);

  const handleConnectLesson = async () => {
    const result = await ipcRenderer.invoke("app:on-connect-lesson", {
      lessonId: lesson.id,
      directoryPath: rootPath,
    });

    if (result.success) {
      setLesson(data.lesson);
      setSolutions(data.solutions);

      setCurrentLesson(data.lesson);
      setSolutions(data.solutions);
      addTab({
        type: "lesson",
        name: lesson.name,
      });

      onCreate();
    }
  };

  return (
    <div className=" animate-slow-appear flex h-full w-full flex-col  ">
      <div className="scrollbar  w-full overflow-y-auto p-2">
        <h3 className="first-letter flex items-center gap-2 text-gray-500">
          <TbPlugConnected size={40} /> Connecting to the lesson...
        </h3>
        <div className="mb-1 text-sm">Choose a course:</div>
        <div className="scrollbar flex max-h-40 flex-col overflow-auto rounded bg-white">
          {myCourses.data?.map((courseEl, idx) => {
            const isChosen = courseEl.id === course.id;
            return (
              <div
                className={clsxm(
                  "cursor-pointer p-1 px-2 text-sm hover:bg-white active:bg-gray-100 active:shadow-inner",
                  isChosen &&
                    "  bg-emerald-200 transition-all hover:bg-emerald-400 active:bg-emerald-500",
                )}
                key={idx}
                onClick={() => {
                  setCourse({ id: courseEl.id, name: courseEl.name });
                  setLesson({ id: "", name: "" });
                  setCanBeCreated(false);
                }}
              >
                {courseEl.name}
              </div>
            );
          })}
        </div>
        {lessons.data && (
          <>
            <div className="animate-slow-appear my-1 text-sm">
              Choose a lesson:
            </div>
            <div className="animate-slow-appear scrollbar flex max-h-40 flex-col overflow-auto rounded bg-white">
              {lessons.data?.map((lessonEl, idx) => {
                const isChosen = lessonEl.id === lesson.id;
                return (
                  <div
                    className={clsxm(
                      "cursor-pointer p-1 px-2 text-sm hover:bg-white active:bg-gray-100 active:shadow-inner",
                      isChosen &&
                        "  bg-emerald-200 transition-all hover:bg-emerald-400 active:bg-emerald-500",
                    )}
                    key={idx}
                    onClick={() => {
                      setLesson({ id: lessonEl.id, name: lessonEl.name });
                      const parsedMeta = metaSchema.safeParse(lessonEl.meta);
                      if (parsedMeta.success) {
                        setMeta({
                          architecture: parsedMeta.data.architecture,
                          assembler: parsedMeta.data.assembler,
                        });
                      } else {
                        setMeta({
                          architecture: "",
                          assembler: "",
                        });
                      }
                      setCanBeCreated(false);
                    }}
                  >
                    {lessonEl.name}
                  </div>
                );
              })}
              {lessons.data.length === 0 && (
                <div className="px-2 py-1 text-sm italic text-gray-500">
                  This course does not contain lessons yet
                </div>
              )}
            </div>
          </>
        )}
        {lesson.id && (
          <div className="animate-slow-appear mt-1">
            <h4 className="first-letter mb-1 flex items-center gap-2 text-sm">
              Compatibility
            </h4>
            <div className="flex flex-col gap-1 rounded bg-white px-2 py-1  text-sm">
              <div className="flex gap-2">
                Architecture:{" "}
                {meta.architecture || (
                  <span className="italic text-gray-500">Not set</span>
                )}
              </div>
              <div className="flex gap-2">
                Assembler:{" "}
                {meta.assembler || (
                  <span className="italic text-gray-500">Not set</span>
                )}
              </div>
              <Button
                onClick={handleCheckCompatibility}
                className="mb-1 flex w-full items-center gap-2 border px-2 py-1 text-sm outline-1"
              >
                Check compatibility
                {canBeCreated && (
                  <BsFillCheckCircleFill
                    size={18}
                    className="animate-slow-appear z-10 text-emerald-500"
                  />
                )}
              </Button>
            </div>
          </div>
        )}
        {canBeCreated && (
          <Button
            className={clsxm("animate-slow-appear mt-2 w-full text-sm")}
            onClick={() => handleConnectLesson()}
          >
            Connect with lesson
          </Button>
        )}
      </div>
    </div>
  );
};

export default ConnectToLessonForm;
