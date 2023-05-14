import { useEffect, useRef, useState } from "react";
import { z } from "zod";

import Button from "../../../components/Button";
import useFileStore from "../../../stores/fileStore";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import { api } from "../../../utils/api";
import clsxm from "../../../utils/clsxm";
import useCreateProject from "../hooks/useCreateProject";
import CreateAnswerHeader from "./CreateAnswerHeader";
import CreateAnswerLessonPicker from "./CreateAnswerLessonPicker";

const metaSchema = z.object({
  architecture: z.string().nonempty(),
  assembler: z.string().nonempty(),
});

const CreateAnswerContainer = () => {
  const setStage = useWelcomeModalStore((state) => state.setStage);
  const setIsOpen = useWelcomeModalStore((state) => state.setIsOpen);
  const rootPath = useFileStore((state) => state.rootPath);

  const [courseInfo, setCourseInfo] = useState({ name: "", id: "" });
  const [lessonInfo, setLessonInfo] = useState({ name: "", id: "" });
  const [architecture, setArchitecture] = useState("");
  const [assembly, setAssembly] = useState("");

  const metaRef = useRef<{
    architecture?: string;
    assembler?: string;
  }>();

  const getTitleByStage = (courseName, lessonName, architecture, assembly) => {
    switch (true) {
      case courseName.id === "": {
        return "Choose course";
      }
      case lessonName.id === "": {
        return "Choose lesson";
      }
      case assembly == undefined: {
        return "Choose directory";
      }
      case architecture == undefined: {
        return "Choose assembler";
      }
      default:
        return "Choose name";
    }
  };

  const { createProject } = useCreateProject(() => setIsOpen(false));

  const { data } = api.lesson.show.useQuery(
    { lessonId: lessonInfo.id },
    { enabled: !!lessonInfo.id },
  );

  useEffect(() => {
    if (data) {
      try {
        metaRef.current = metaSchema.parse(data.lesson.meta);
      } catch (e) {
        console.error(e);
      }
    }
  }, [data]);

  const handleChooseDirectory = () => {
    if (!lessonInfo.id) return;
    createProject({
      name: lessonInfo.name,
      assembly: metaRef.current.assembler || "NASM",
      architecture: metaRef.current.architecture || "x86",
      lessonId: lessonInfo.id,
    });
  };

  return (
    <div className="w-full">
      <CreateAnswerHeader
        onBack={() => (rootPath ? setIsOpen(false) : setStage("welcome"))}
        title={getTitleByStage(courseInfo, lessonInfo, architecture, assembly)}
      />
      <div className="flex w-full flex-col items-end gap-2">
        <CreateAnswerLessonPicker
          course={courseInfo}
          setCourse={setCourseInfo}
          lesson={lessonInfo}
          setLesson={setLessonInfo}
        />
        <Button
          onClick={handleChooseDirectory}
          className={clsxm(!lessonInfo.id && "cursor-not-allowed opacity-30")}
        >
          Choose directory
        </Button>
      </div>
    </div>
  );
};

export default CreateAnswerContainer;
