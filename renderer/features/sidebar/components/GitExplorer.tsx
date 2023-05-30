import { useState } from "react";
import { FaGitAlt } from "react-icons/fa";

import useFileStore from "../../../stores/fileStore";
import useGit from "../hooks/useGit";
import useGitStore from "../stores/gitStore";
import BranchDropdown from "./BranchDropdown";
import CommitChanges from "./CommitChanges";
import CommitForm from "./CommitForm";
import GitHeader from "./GitHeader";
import RemotesList from "./RemotesList";

const GitExplorer = () => {
  const projectName = useFileStore((state) => state.projectName);

  const {
    isRepo,
    initRepo,
    addRemote,
    addFilesToStaged,
    removeFilesFromStaged,
    commit,
    push,
    pull,
    sync,
  } = useGit();

  const [remotesOpened, setRemotesOpened] = useState(false);
  const gitStatus = useGitStore((state) => state.gitStatus);

  return (
    <>
      {gitStatus ? (
        <>
          <GitHeader
            projectName={projectName}
            setRemotesOpened={setRemotesOpened}
            remotesOpened={remotesOpened}
            push={push}
            pull={pull}
            sync={sync}
            gitStatus={gitStatus}
          />
          <div
            className={`${
              remotesOpened
                ? "scrollbar h-24 overflow-auto"
                : "h-0 overflow-hidden "
            }  bg-gray-300 px-2 text-sm transition-all`}
          >
            <RemotesList addRemote={addRemote} />
          </div>
        </>
      ) : null}
      <div className="flex h-full flex-col items-center justify-center">
        {isRepo && gitStatus ? (
          <div className="animate-slow-appear flex h-full w-full flex-col justify-start ">
            <BranchDropdown gitStatus={gitStatus} />
            <CommitForm commit={commit} />
            <CommitChanges
              gitStatus={gitStatus}
              addFilesToStaged={addFilesToStaged}
              removeFilesFromStaged={removeFilesFromStaged}
            />
          </div>
        ) : (
          <div className="animate-slow-appear flex flex-col items-center gap-2">
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
