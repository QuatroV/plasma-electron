import { Dispatch, SetStateAction } from "react";
import { CgRemote } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { TbDownload, TbRefresh, TbUpload } from "react-icons/tb";
import { StatusResult } from "simple-git";

type Props = {
  projectName: string;
  setRemotesOpened: Dispatch<SetStateAction<boolean>>;
  remotesOpened: boolean;
  push: () => Promise<void>;
  pull: () => Promise<void>;
  sync: () => Promise<void>;
  gitStatus: StatusResult;
};

const GitHeader = (props: Props) => {
  const {
    projectName,
    setRemotesOpened,
    remotesOpened,
    push,
    pull,
    sync,
    gitStatus,
  } = props;

  return (
    <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 py-1 px-2 text-sm font-semibold uppercase">
      {projectName}
      {!remotesOpened ? (
        <div className="flex gap-1">
          <div className="flex gap-1 rounded-full  border-gray-500 ">
            {gitStatus.behind ? (
              <div className="flex items-center text-xs">
                {gitStatus.behind}
              </div>
            ) : null}
            <TbDownload
              size={18}
              className="cursor-pointer"
              title="Pull"
              onClick={() => pull()}
            />
          </div>
          <div className="flex gap-1">
            {gitStatus.ahead ? (
              <div className="flex items-center text-xs">{gitStatus.ahead}</div>
            ) : null}
            <TbUpload
              size={18}
              className="cursor-pointer"
              title="Push"
              onClick={() => push()}
            />
          </div>
          <TbRefresh
            size={18}
            className="cursor-pointer"
            title="Sync"
            onClick={() => sync()}
          />
          <CgRemote
            size={18}
            className="cursor-pointer"
            title="Remotes"
            onClick={() => setRemotesOpened((prev) => !prev)}
          />
        </div>
      ) : (
        <IoMdClose
          className="cursor-pointer"
          onClick={() => setRemotesOpened(false)}
          size={18}
        />
      )}
    </div>
  );
};

export default GitHeader;
