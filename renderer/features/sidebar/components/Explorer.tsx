import Image from "next/image";
import useFileStore from "../../../stores/fileStore";
import useLoadFile from "../../../hooks/useLoadFile";
import ExplorerContextMenu from "./ExplorerContextMenu";
import { useState } from "react";
import Spinner from "../../../components/Spinner";
import useSearchFile from "../hooks/useSearchFile";

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
      return "/sidebar/draft_FILL0_wght400_GRAD0_opsz48.svg";
    }
    return "/sidebar/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
  };

  const renderItems = (files) => {
    const nodes = [];
    files.forEach((file, idx) => {
      const { items, nestingLevel, name, kind } = file;
      nodes.push(
        <ExplorerContextMenu>
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
        </ExplorerContextMenu>
      );
    });

    return nodes.map((node) => node);
  };

  const [searchFormOpened, setSearchFormOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { searchFiles, searchResults, loading } = useSearchFile();

  const handleChange = async (e) => {
    setSearchValue(e.target.value);
    await searchFiles(e.target.value);
  };

  const showDirectory = !searchFormOpened || !searchValue;
  const showSearchResults = searchFormOpened && searchValue;
  const showNothingFound =
    searchFormOpened && !searchResults.length && !loading;

  return (
    <>
      <div className=" flex min-h-[36.8px] flex-row items-center justify-between bg-gray-300 p-2 text-sm font-semibold uppercase">
        {projectName || "Explorer"}
        <Image
          onClick={() => setSearchFormOpened((prevState) => !prevState)}
          alt="Search"
          className={`cursor-pointer rounded`}
          src={
            searchFormOpened
              ? `/editor/close_FILL0_wght400_GRAD0_opsz48.svg`
              : `/sidebar/search_FILL0_wght400_GRAD0_opsz48.svg`
          }
          width="16"
          height="16"
        />
      </div>
      <div
        className={`${searchFormOpened ? "h-9" : "h-0"} text-sm transition-all`}
      >
        <div className="flex flex-row gap-1 p-1">
          <input
            placeholder="Type name here..."
            value={searchValue}
            onChange={handleChange}
            type="text"
            className=" flex-1 rounded p-1"
          />
        </div>
      </div>
      {showDirectory && (
        <div className=" scrollbar relative overflow-y-hidden bg-gray-200 pt-1 shadow-inner hover:overflow-y-auto">
          {renderItems(visibleFiles)}
        </div>
      )}
      {loading && (
        <div className="mt-3 flex items-center justify-center text-sm">
          <Spinner /> Searching...
        </div>
      )}
      {showSearchResults ? (
        <div className=" scrollbar relative overflow-y-hidden bg-gray-200 pt-1 shadow-inner hover:overflow-y-auto">
          {renderItems(searchResults)}
        </div>
      ) : null}
      {showNothingFound ? (
        <div className="my-2 flex items-center justify-center text-sm">
          Nothing found
        </div>
      ) : null}
    </>
  );
};

export default Explorer;
