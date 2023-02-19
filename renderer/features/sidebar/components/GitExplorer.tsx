import useFileStore from "../../../stores/fileStore";
import { FaGitAlt } from "react-icons/fa";
import useGit from "../hooks/useGit";
import { IoMdClose } from "react-icons/io";
import { useState, useRef } from "react";
import { CgRemote } from "react-icons/cg";
import RemotesList from "./RemotesList";
import CommitChanges from "./CommitChanges";
import CommitForm from "./CommitForm";

const GitExplorer = () => {
  const projectName = useFileStore((state) => state.projectName);

  const {
    isRepo,
    initRepo,
    gitStatus,
    addRemote,
    addFilesToStaged,
    removeFilesFromStaged,
    commit,
  } = useGit();

  const [remotesOpened, setRemotesOpened] = useState(false);

  return (
    <>
      <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 py-1 px-2 text-sm font-semibold uppercase">
        {projectName}
        {!remotesOpened ? (
          <CgRemote
            size={18}
            className="cursor-pointer"
            title="Remotes"
            onClick={() => setRemotesOpened((prev) => !prev)}
          />
        ) : (
          <IoMdClose
            className="cursor-pointer"
            onClick={() => setRemotesOpened(false)}
            size={18}
          />
        )}
      </div>
      <div
        className={`${
          remotesOpened
            ? "scrollbar h-64 overflow-auto"
            : "h-0 overflow-hidden "
        }  bg-gray-300 px-2 text-sm transition-all`}
      >
        <RemotesList addRemote={addRemote} />
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        {isRepo ? (
          <div className="flex h-full w-full flex-col justify-start ">
            <CommitForm commit={commit} />
            <CommitChanges
              gitStatus={gitStatus}
              addFilesToStaged={addFilesToStaged}
              removeFilesFromStaged={removeFilesFromStaged}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <FaGitAlt size={100} color="rgb(107 114 128)" />
            <span className="text-gray-500">No Git repo found!</span>
            <button
              onClick={initRepo}
              className="rounded-xl border border-gray-400 px-2 py-0.5 transition-all hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-500 hover:text-white active:scale-105 active:shadow"
            >
              Create one
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GitExplorer;
