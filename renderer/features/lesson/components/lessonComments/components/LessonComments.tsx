import { useState } from "react";
import LessonCommentsContent from "./LessonCommentsContent";
import LessonCommentsHeader from "./LessonCommentsHeader";

const LessonComments = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <LessonCommentsHeader isOpen={isOpen} setOpen={setOpen} />
      <LessonCommentsContent isOpen={isOpen} />
    </div>
  );
};

export default LessonComments;
