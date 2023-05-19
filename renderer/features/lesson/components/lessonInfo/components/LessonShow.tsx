import ReactHtmlParser from "react-html-parser";

import useLessonStore from "../../../../../stores/lessonStore";
import { transform } from "../utils/parse";

const LessonShow = () => {
  const currentContent = useLessonStore((state) => state.lesson?.content);
  if (!currentContent) return null;

  return <div>{ReactHtmlParser(currentContent, { transform })}</div>;
};

export default LessonShow;
