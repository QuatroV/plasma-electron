import ExplorerItemIcon from "./ExplorerItemIcon";

import { useDrop } from "react-dnd";
import useEditFile from "../../../hooks/useEditFile";
import { getFileName } from "../../../utils/path";
import { FileInfo } from "../../../stores/fileStore";

const ExplorerItemDirectory = ({
  file,
  handleContextMenu,
  nestingLevel,
  isCurrentlyOpen,
  getMarginLeftByNesting,
  openFile,
  idx,
}) => {
  const { renameFile: moveFile } = useEditFile();
  const [{ isOver }, dropRef] = useDrop({
    accept: "explorerItem",
    drop: async (item: { file: FileInfo }) => {
      await moveFile(
        item.file.path,
        `${file.path}/${getFileName(item.file.path)}`
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
      }`}
      key={idx}
      onClick={(e) => openFile(e, file)}
      ref={dropRef}
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
        {!file.items.length && (
          <span className="font-light text-gray-400"> (empty)</span>
        )}
      </div>
    </div>
  );
};

export default ExplorerItemDirectory;
