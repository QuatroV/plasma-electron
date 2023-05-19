import { FormEventHandler } from "react";
import { BiTask } from "react-icons/bi";
import Button from "~/components/Button";
import Input from "~/components/Input";
import useLessonStore from "~/stores/lessonStore";
import { api } from "~/utils/api";

const TaskForm = () => {
  const currentLesson = useLessonStore((state) => state.lesson);
  const setCurrentLesson = useLessonStore((state) => state.setLesson);

  const createTaskMutation = api.task.create.useMutation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!currentLesson?.id) {
      return;
    }

    const lesson = await createTaskMutation.mutateAsync({
      lessonId: currentLesson?.id,
      name: e.currentTarget.task_name.value,
      content: e.currentTarget.task_content.value,
      expectedResult: e.currentTarget.task_expected_results.value,
    });

    setCurrentLesson(lesson);
  };

  return (
    <div>
      <div className="flex w-72 flex-col gap-3 text-sm">
        <div className="flex items-center gap-2 text-base font-black">
          <div className=" h-[40px] w-fit rounded-full bg-white p-1 drop-shadow">
            <BiTask className="p-1" size={32} />
          </div>
          <div>
            <div>Create new task</div>
            <div className="text-xs font-normal text-gray-600">
              in {currentLesson?.name}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mb-2 flex flex-col gap-1">
          <div className="font-bold">Data:</div>
          <div className="flex items-center gap-2">
            <label className="">Name:</label>
            <Input
              name="task_name"
              autofocus
              placeholder="Enter the name..."
              onChange={() => null}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="w-20">Content:</label>
            <Input
              name="task_content"
              multiline
              autofocus
              placeholder="Describe the task..."
              onChange={() => null}
            />
          </div>
          <div className="mb-2 flex flex-col items-start gap-1">
            <label className="">Expected Results:</label>
            <Input
              name="task_expected_results"
              multiline
              autofocus
              placeholder="Enter the expected output of the program..."
              onChange={() => null}
            />
          </div>

          <Button className=" flex-1 whitespace-pre py-1">Create task</Button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
