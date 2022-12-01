import Image from "next/image";
import useFileStore from "../../../stores/fileStore";
import useLoadFile from "../../../hooks/useLoadFile";

const Explorer = () => {
  const visibleFiles = useFileStore((state) => state.files);
  const projectName = useFileStore((state) => state.projectName);
  const { currentFile, openFile } = useLoadFile();

  const getMarginLeftByNesting = (nestingLevel) => {
    switch (nestingLevel) {
      case 1:
        return "ml-2";
      case 2:
        return "ml-4";
      case 3:
        return "ml-6";
      case 4:
        return "ml-8";
      case 0:
      default:
        return "ml-0";
    }
  };

  const getItemIcon = (file) => {
    if (file.kind === "file") {
      return "/explorer/draft_FILL0_wght400_GRAD0_opsz48.svg";
    }
    return "/explorer/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
  };

  const renderItems = (files) => {
    const nodes = [];
    files.forEach((file, idx) => {
      const { items, nestingLevel, name, kind } = file;
      nodes.push(
        <>
          <div
            className={`${getMarginLeftByNesting(
              nestingLevel
            )} relative flex cursor-pointer items-center gap-1 p-0.5 text-sm hover:bg-gray-300 ${
              currentFile === file.name &&
              "bg-gray-300 outline-1 transition-all hover:outline hover:outline-emerald-400"
            } ${
              nestingLevel > 0 &&
              "before:absolute before:-left-0.5 before:h-full before:w-0.5 before:bg-gray-300"
            }`}
            key={idx}
            onClick={(e) => openFile(e, file, true)}
          >
            <div className="flex w-[16px] items-center">
              <Image
                alt={kind === "directory" ? "d" : "f"}
                src={getItemIcon(file)}
                className={`${
                  kind === "directory" &&
                  file.items.length &&
                  !file.items[0].visible
                    ? "-rotate-90"
                    : ""
                }`}
                height="16"
                width="16"
              />
            </div>
            <div className="flex-1 overflow-hidden text-ellipsis" title={name}>
              {name}
              {kind === "directory" && !file.items.length && (
                <span className="font-light text-gray-400"> (empty)</span>
              )}
            </div>
          </div>
          {items.length && items[0].visible ? renderItems(items) : null}
        </>
      );
    });

    return nodes.map((node) => node);
  };

  return (
    <aside className=" w-48 min-w-[12rem] bg-gray-200 font-rubik">
      <div className=" min-h-[36.8px] bg-gray-300 p-2 text-sm font-semibold">
        {projectName || "Explorer"}
      </div>
      <div className=" scrollbar relative mb-1 h-[calc(100vh-68px)] overflow-y-hidden bg-gray-200 pt-1 shadow-inner hover:overflow-y-auto">
        {renderItems(visibleFiles)}
      </div>
    </aside>
  );
};

export default Explorer;
