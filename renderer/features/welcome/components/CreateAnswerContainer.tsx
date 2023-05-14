import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import useFileStore from "../../../stores/fileStore";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import CreateAnswerHeader from "./CreateAnswerHeader";
import CreateAnswerLessonPicker from "./CreateAnswerLessonPicker";

const CreateAnswerContainer = () => {
  const setStage = useWelcomeModalStore((state) => state.setStage);
  const setIsOpen = useWelcomeModalStore((state) => state.setIsOpen);
  const rootPath = useFileStore((state) => state.rootPath);

  const [courseName, setCourseName] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [architecture, setArchitecture] = useState("");
  const [assembly, setAssembly] = useState("");

  const getTitleByStage = (courseName, lessonName, architecture, assembly) => {
    switch (true) {
      case courseName !== undefined: {
        return "Choose course";
      }
      case lessonName !== undefined: {
        return "Choose lesson";
      }
      case assembly !== undefined: {
        return "Choose directory";
      }
      case architecture !== undefined: {
        return "Choose assembler";
      }
      default:
        return "Choose name";
    }
  };

  return (
    <div className="">
      <CreateAnswerHeader
        onBack={() => (rootPath ? setIsOpen(false) : setStage("welcome"))}
        title={getTitleByStage(courseName, lessonName, architecture, assembly)}
      />
      <div className="flex flex-col gap-2">
        <CreateAnswerLessonPicker />
      </div>
    </div>
  );
};

export default CreateAnswerContainer;
