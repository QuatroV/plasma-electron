import { useState } from "react";
import LessonTasksContent from "./LessonTasksContent";
import LessonTasksHeader from "./LessonTasksHeader";

const LessonTasks = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-2">
      <LessonTasksHeader isOpen={isOpen} setOpen={setOpen} />
      <LessonTasksContent isOpen={isOpen} />
    </div>
  );
};

export default LessonTasks;
