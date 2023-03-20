import useFileStore from "../../../stores/fileStore";
import useLoadFile from "../../../hooks/useLoadFile";
import { useState } from "react";
import Spinner from "../../../components/Spinner";
import useSearchFile from "../hooks/useSearchFile";
import { TbRefresh } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import useRefreshDir from "../hooks/useRefreshDir";
import clsxm from "../../../utils/clsxm";
import ExplorerItemIcon from "./ExplorerItemIcon";
import useContextMenuStore from "../../../stores/contextMenuStore";
import ExplorerItem from "./ExplorerItem";
import Tooltip from "../../../components/Tooltip";
import ExplorerEmptySpace from "./ExplorerEmptySpace";

const Explorer = () => {
  const visibleFiles = useFileStore((state) => state.files);
  const projectName = useFileStore((state) => state.projectName);
  const { currentFile, openFile } = useLoadFile();

  const renderItems = (
    files,
    setContextMenuOpen,
    setPoint,
    setVariant,
    setContextData
  ) => {
    const nodes = [];
    files.forEach((file, idx) => {
      const { items } = file;
      const isCurrentlyOpen = currentFile?.name === file.name;

      const explorerItemProps = {
        file,
        setVariant,
        setContextData,
        setPoint,
        isCurrentlyOpen,
        setContextMenuOpen,
        openFile,
        idx,
      };

      nodes.push(
        <>
          <ExplorerItem {...explorerItemProps} />
          {items.length && items[0].visible
            ? renderItems(
                items,
                setContextMenuOpen,
                setPoint,
                setVariant,
                setContextData
              )
            : null}
        </>
      );
    });

    return nodes.map((node) => node);
  };

  const renderSearchResults = (
    files,
    setContextMenuOpen,
    setPoint,
    setVariant,
    setContextData
  ) => {
    const nodes = [];
    files.forEach((file, idx) => {
      const { items, name, kind } = file;
      const isCurrentlyOpen = currentFile?.name === file.name;
      nodes.push(
        <>
          <div
            className={`group relative flex cursor-pointer items-center gap-1 p-0.5 text-sm hover:bg-gray-300 ${
              isCurrentlyOpen && "bg-gray-300 outline-1 transition-all"
            }`}
            key={idx}
            onClick={(e) => openFile(e, file)}
          >
            <div className="flex w-[16px] items-center">
              <ExplorerItemIcon file={file} />
            </div>
            <div
              className="flex-1 overflow-hidden text-ellipsis whitespace-pre"
              title={name}
            >
              {name}
              <span className=" ml-1 inline-block transition-all group-hover:translate-x-1">
                {isCurrentlyOpen && " →"}
              </span>
              {kind === "directory" && !file.items.length && (
                <span className="font-light text-gray-400"> (empty)</span>
              )}
            </div>
          </div>
          {items.length && items[0].visible
            ? renderSearchResults(
                items,
                setContextMenuOpen,
                setPoint,
                setVariant,
                setContextData
              )
            : null}
        </>
      );
    });

    return nodes.map((node) => node);
  };

  const [searchFormOpened, setSearchFormOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const setContextMenuOpen = useContextMenuStore((state) => state.setIsOpen);
  const setPoint = useContextMenuStore((state) => state.setPoint);
  const setVariant = useContextMenuStore((state) => state.setVariant);
  const setContextData = useContextMenuStore((state) => state.setContextData);

  const { searchFiles, searchResults, loading, resultsCount } = useSearchFile();
  const { refreshDir } = useRefreshDir();

  const handleChange = async (e) => {
    setSearchValue(e.target.value);
    await searchFiles(e.target.value);
  };

  const showDirectory = !searchFormOpened || !searchValue;
  const showSearchResults = searchFormOpened && searchValue;
  const showNothingFound =
    searchFormOpened && !searchResults.length && !loading && searchValue;

  const [refreshButtonRotate, setRefreshButtonRotate] = useState(false);

  const handleRefresh = () => {
    refreshDir();
    setRefreshButtonRotate(true);
  };

  return (
    <>
      <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 py-1 px-2 text-sm font-semibold uppercase">
        {projectName || "Explorer"}
        <div className="flex gap-1">
          {searchFormOpened ? (
            <IoMdClose
              className="cursor-pointer"
              onClick={() => setSearchFormOpened(false)}
              size={18}
            />
          ) : (
            <>
              <Tooltip
                tooltip={<span>Update info about files in directory</span>}
              >
                <TbRefresh
                  onClick={handleRefresh}
                  className={clsxm(
                    "cursor-pointer",
                    refreshButtonRotate && "animate-one-roll "
                  )}
                  size={18}
                  onAnimationEnd={() => setRefreshButtonRotate(false)}
                />
              </Tooltip>

              <Tooltip tooltip={<span>Search files</span>}>
                <AiOutlineSearch
                  className="cursor-pointer"
                  onClick={() => setSearchFormOpened(true)}
                  size={18}
                />
              </Tooltip>
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          searchFormOpened ? "h-14" : "h-0"
        } bg-gray-300 text-sm transition-all`}
      >
        <div className="flex flex-col gap-1 p-1">
          <input
            placeholder="Type name here..."
            value={searchValue}
            onChange={handleChange}
            type="text"
            className=" flex-1 rounded p-1"
          />
          <div className="text-xs">Results count: {resultsCount}</div>
        </div>
      </div>
      {showDirectory && (
        <div className=" relative flex h-full flex-col overflow-y-hidden bg-gray-200 pt-1 shadow-inner hover:overflow-y-auto">
          {renderItems(
            visibleFiles,
            setContextMenuOpen,
            setPoint,
            setVariant,
            setContextData
          )}
          <ExplorerEmptySpace
            setContextMenuOpen={setContextMenuOpen}
            setPoint={setPoint}
            setVariant={setVariant}
            setContextData={setContextData}
          />
        </div>
      )}
      {loading && (
        <div className="mt-3 flex items-center justify-center text-sm">
          <Spinner /> Searching...
        </div>
      )}
      {showSearchResults ? (
        <div className=" scrollbar relative overflow-y-hidden bg-gray-200 pt-1 shadow-inner hover:overflow-y-auto">
          {renderSearchResults(
            searchResults,
            setContextMenuOpen,
            setPoint,
            setVariant,
            setContextData
          )}
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
