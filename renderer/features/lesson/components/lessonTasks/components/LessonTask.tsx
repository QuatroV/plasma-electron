import { useEffect, useRef, useState } from "react";
import { ipcRenderer } from "electron";
import { BsCheckCircleFill, BsQuestionCircle } from "react-icons/bs";
import { ImSpinner9 as Spinner } from "react-icons/im";
import { MdCancel } from "react-icons/md";

import { Prisma } from "@plasma/db";

import Button from "../../../../../components/Button";
import { api } from "../../../../../utils/api";
import { getFileName } from "../../../../../utils/path";
import useSolutionStore from "../stores/solutionsStore";

type Props = {
  task: Prisma.TaskGetPayload<{
    select: {
      id: true;
      name: true;
      content: true;
      expectedResult: true;
    };
  }>;
};

type SolutionState =
  | "correct"
  | "incorrect"
  | "pending"
  | "none"
  | "sended"
  | "approved"
  | "rejected";

const LessonTask = ({ task }: Props) => {
  const [solutionState, setSolutionState] = useState<SolutionState>("none");

  const [solutionFilename, setSolutionFilename] = useState<string>();
  const solutionTextRef = useRef<string>();

  const solutionForTask = useSolutionStore((state) =>
    state.solutions.find((s) => s.taskId === task.id),
  );

  useEffect(() => {
    if (solutionForTask && solutionForTask.mark === undefined) {
      setSolutionState("sended");
    } else if (solutionForTask && solutionForTask.mark) {
      setSolutionState("approved");
    } else if (solutionForTask && solutionForTask.mark === 0) {
      setSolutionState("rejected");
    }
  }, []);

  const handleCheckSolution = (expectedResult: string) => async () => {
    setSolutionState("pending");
    const result = await ipcRenderer.invoke("app:on-check-task", {
      expectedResult,
    });

    if (result.success) {
      solutionTextRef.current = result.fileContents;
      setSolutionFilename(getFileName(result.filePath));
      setSolutionState("correct");
    } else {
      setSolutionState("incorrect");
    }
  };

  const createSolutionMutation = api.solution.create.useMutation();

  const handleSendFileForChecking = async () => {
    await createSolutionMutation.mutateAsync({
      taskId: task.id,
      content: solutionTextRef.current,
    });
    setSolutionState("sended");
  };

  if (solutionState === "sended")
    return (
      <div className="flex flex-col gap-2 rounded border p-2">
        <div className="flex items-center gap-2 font-bold">
          <BsQuestionCircle />
          {task.name}
        </div>
        <div className="text-sm">{task.content}</div>
        <div className="text-sm italic">
          Waiting for teacher to approve solution...
        </div>
      </div>
    );

  if (solutionState === "approved")
    return (
      <div className="flex flex-col gap-2 rounded border p-2">
        <div className="flex items-center gap-2 font-bold">
          <BsQuestionCircle />
          {task.name}
        </div>
        <div className="text-sm">{task.content}</div>
        <div className="text-sm italic">
          Waiting for teacher to approve solution...
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 rounded border p-2">
      <div className="flex items-center gap-2 font-bold">
        <BsQuestionCircle />
        {task.name}
      </div>
      <div className="text-sm">{task.content}</div>
      <div className="flex gap-2">
        <Button
          onClick={handleCheckSolution(task.expectedResult)}
          className="flex items-center gap-2 border px-2 py-1 text-sm"
        >
          Check solution
          {solutionState === "pending" && (
            <Spinner size={20} className="z-10 animate-spin " />
          )}
          {solutionState === "correct" && (
            <BsCheckCircleFill className="text-emerald-500" size={20} />
          )}
        </Button>
        {solutionState === "incorrect" && (
          <div className="flex items-center gap-1 text-sm text-red-500">
            <MdCancel size={24} />
            Results of execution of the program are not expected. Try again
          </div>
        )}
        {solutionState === "rejected" && (
          <div className="flex items-center gap-1 text-sm text-red-500">
            <MdCancel size={24} />
            Previous solution was rejected by teacher. Please try again
          </div>
        )}
        {solutionState === "correct" && (
          <Button
            onClick={handleSendFileForChecking}
            className="border px-2 py-1 text-sm"
          >
            Send {solutionFilename} for checking
          </Button>
        )}
      </div>
    </div>
  );
};

export default LessonTask;
