import { useRef, useState } from "react";

import Button from "../../../../../components/Button";
import Dropdown from "../../../../../components/Dropdown";
import useOnClickOutside from "../../../../../hooks/useOnClickOutside";
import useLessonStore from "../../../../../stores/lessonStore";
import { api } from "../../../../../utils/api";
import clsxm from "../../../../../utils/clsxm";
import useTaskStore from "../stores/tasksStore";

const LessonTasksMenubar = () => {
  const setIsTaskModalOpen = useTaskStore((state) => state.setIsTaskModalOpen);

  const handleClick = () => {
    setIsTaskModalOpen(true);
  };

  const [tasksMeta, setTasksMeta] = useState({
    architecture: "x86",
    assembler: "NASM",
  });

  const architectureDropdownListRef = useRef(null);
  const assemblerDropdownListRef = useRef(null);

  const [architectureDropdownOpen, setArchitectureDropdownOpen] =
    useState(false);
  const [assemblerDropdownOpen, setAssemblerDropdownOpen] = useState(false);

  useOnClickOutside(architectureDropdownListRef, () =>
    setArchitectureDropdownOpen(false),
  );
  useOnClickOutside(assemblerDropdownListRef, () =>
    setAssemblerDropdownOpen(false),
  );

  const lessonId = useLessonStore((state) => state.lesson?.id);

  const setLesson = useLessonStore((state) => state.setLesson);

  const updateMetaMutation = api.lesson.updateMeta.useMutation();

  const handleSave = async () => {
    if (!lessonId) return;
    const updatedLesson = await updateMetaMutation.mutateAsync({
      lessonId,
      meta: JSON.stringify(tasksMeta),
    });
    setLesson(updatedLesson);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 p-2">
        <Button className="py-1 text-sm" onClick={handleClick}>
          Add Task
        </Button>
        <Dropdown
          onClick={() => setArchitectureDropdownOpen(true)}
          ref={architectureDropdownListRef}
          dropdownOpen={architectureDropdownOpen}
          options={[
            () => (
              <div
                onClick={() => {
                  setTasksMeta((prev) => ({ ...prev, architecture: "x86" }));
                  setArchitectureDropdownOpen(false);
                }}
              >
                x86
              </div>
            ),
          ]}
          dropdownStyles="top-full right-0 rounded mt-1 left-0 border"
        >
          <Button className="py-1 text-sm">
            Architecture: {tasksMeta.architecture}
          </Button>
        </Dropdown>
        <Dropdown
          onClick={() => setAssemblerDropdownOpen(true)}
          dropdownOpen={assemblerDropdownOpen}
          ref={assemblerDropdownListRef}
          options={[
            () => (
              <div
                onClick={() => {
                  setTasksMeta((prev) => ({ ...prev, assembler: "NASM" }));
                  setAssemblerDropdownOpen(false);
                }}
              >
                NASM
              </div>
            ),
            () => (
              <div
                onClick={() => {
                  setTasksMeta((prev) => ({ ...prev, assembler: "MASM" }));
                  setAssemblerDropdownOpen(false);
                }}
              >
                MASM
              </div>
            ),
          ]}
          dropdownStyles="top-full right-0 rounded mt-1 left-0 border"
        >
          <Button className="py-1 text-sm">
            Assembler: {tasksMeta.assembler}
          </Button>
        </Dropdown>
      </div>
      <Button
        className={clsxm("visible m-2 bg-emerald-600 py-1 text-sm text-white")}
        onClick={handleSave}
      >
        Save changes
      </Button>
    </div>
  );
};

export default LessonTasksMenubar;
