import { AiFillStar } from "react-icons/ai";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";

import useLessonStore from "../../../stores/lessonStore";
import { JsonElement, parseHtmlToJson } from "../../../utils/HTMLtoJSON";
import clsxm from "../../../utils/clsxm";

const isHeaderTag = (jsonElement: JsonElement) => {
  const tagLowered = jsonElement.tag.toLowerCase();
  return tagLowered === "h1" || tagLowered === "h2" || tagLowered === "h3";
};

const getStylesByHeaderType = (jsonElement: JsonElement) => {
  const tagLowered = jsonElement.tag.toLowerCase();
  switch (tagLowered) {
    case "h1":
      return " ";
    case "h2":
      return "ml-2 rounded-l";
    case "h3":
      return "ml-4 rounded-l";
    default:
      return "";
  }
};

const renderHeadersTree = (
  jsonElement: JsonElement,
): JSX.Element | undefined => {
  if (isHeaderTag(jsonElement)) {
    const handleHeaderClick = () => {
      document
        .querySelector(`#${jsonElement.id}`)
        ?.scrollIntoView({ behavior: "smooth" });
    };

    return jsonElement.text ? (
      <div
        onClick={handleHeaderClick}
        className={clsxm(
          getStylesByHeaderType(jsonElement),
          "relative flex cursor-pointer items-center gap-1 p-1 text-sm hover:bg-gray-300 active:shadow-inner",
        )}
      >
        {jsonElement.tag.toLowerCase() === "h1" ? <AiFillStar /> : undefined}
        {jsonElement.tag.toLowerCase() === "h2" ? (
          <RxBookmarkFilled />
        ) : undefined}
        {jsonElement.tag.toLowerCase() === "h3" ? <RxBookmark /> : undefined}
        {jsonElement.text}
      </div>
    ) : undefined;
  }
  if (jsonElement.children.length !== 0) {
    return (
      <div className="flex w-full flex-col">
        {jsonElement.children.map((child) => {
          return renderHeadersTree(child);
        })}
      </div>
    );
  }
};
const CourseSidebarLessonContents = () => {
  const currentLessonContent = useLessonStore((state) => state.lesson?.content);

  if (!currentLessonContent) return null;

  const parser = new DOMParser();
  const doc = parser.parseFromString(currentLessonContent, "text/html");

  const jsonLessonContent = parseHtmlToJson(doc.body);

  return (
    <div className="">
      <div className=" my-1 ml-3 text-sm font-bold">Lesson Contents:</div>
      <div>{renderHeadersTree(jsonLessonContent)}</div>
    </div>
  );
};

export default CourseSidebarLessonContents;
