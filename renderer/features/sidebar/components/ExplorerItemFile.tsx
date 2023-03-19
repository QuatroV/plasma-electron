import ExplorerItemIcon from "./ExplorerItemIcon";

import { useDrag, useDrop } from "react-dnd";
import { getFileName, getPathWithoutFilename } from "../../../utils/path";
import useEditFile from "../../../hooks/useEditFile";
import { FileInfo } from "../../../stores/fileStore";

const ExplorerItemFile = ({
  file,
  handleContextMenu,
  nestingLevel,
  isCurrentlyOpen,
  getMarginLeftByNesting,
  openFile,
  idx,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "explorerItem",
    item: { file },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { renameFile: moveFile } = useEditFile();
  const [{ isOver }, dropRef] = useDrop({
    accept: "explorerItem",
    drop: async (item: { file: FileInfo }) => {
      await moveFile(
        item.file.path,
        `${getPathWithoutFilename(file.path)}/${getFileName(item.file.path)}`
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div
      onContextMenu={handleContextMenu}
      className={`group ${getMarginLeftByNesting(
        nestingLevel
      )} relative flex cursor-pointer items-center gap-1 p-0.5 text-sm hover:bg-gray-300 ${
        isCurrentlyOpen && "bg-gray-300 outline-1 transition-all"
      } ${
        nestingLevel > 0 &&
        "before:absolute before:-left-0.5 before:h-full before:w-0.5 before:bg-gray-300"
      } ${isDragging && "opacity-60"}`}
      key={idx}
      onClick={(e) => openFile(e, file)}
      ref={(el) => {
        dragRef(el);
        dropRef(el);
      }}
    >
      <div className="flex w-[16px] items-center">
        <ExplorerItemIcon file={file} />
      </div>
      <div
        className="flex-1 overflow-hidden text-ellipsis whitespace-pre"
        title={file.name}
      >
        {file.name}
        <span className=" ml-1 inline-block transition-all group-hover:translate-x-1">
          {isCurrentlyOpen && " →"}
        </span>
      </div>
    </div>
  );
};

export default ExplorerItemFile;
