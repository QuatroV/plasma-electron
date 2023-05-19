import clsxm from "../../../../../utils/clsxm";
import LessonCommentInputForm from "./LessonCommentInputForm";
import LessonCommentsItems from "./LessonCommentsItems";

type Props = {
  isOpen: boolean;
};

const LessonCommentsContent = ({ isOpen }: Props) => {
  return (
    <div
      className={clsxm(
        "flex flex-col gap-2 rounded-lg bg-white p-4 transition-all",
        isOpen ? "visible" : "hidden ",
      )}
    >
      <LessonCommentInputForm />
      <LessonCommentsItems commentsOpened={isOpen} />
    </div>
  );
};

export default LessonCommentsContent;
