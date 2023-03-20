import { Dispatch, SetStateAction } from "react";
import { CgRemote } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { TbDownload, TbRefresh, TbUpload } from "react-icons/tb";
import { StatusResult } from "simple-git";
import Tooltip from "../../../components/Tooltip";

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
            <Tooltip tooltip={<span>Pull changes from remote</span>}>
              <TbDownload
                size={18}
                className="cursor-pointer"
                onClick={() => pull()}
              />
            </Tooltip>
          </div>
          <div className="flex gap-1">
            {gitStatus.ahead ? (
              <div className="flex items-center text-xs">{gitStatus.ahead}</div>
            ) : null}
            <Tooltip tooltip={<span>Push changes</span>}>
              <TbUpload
                size={18}
                className="cursor-pointer"
                onClick={() => push()}
              />
            </Tooltip>
          </div>
          <Tooltip tooltip={<span>Sync with remote repo</span>}>
            <TbRefresh
              size={18}
              className="cursor-pointer"
              onClick={() => sync()}
            />
          </Tooltip>

          <Tooltip tooltip={<span>List of remotes</span>}>
            <CgRemote
              size={18}
              className="cursor-pointer"
              onClick={() => setRemotesOpened((prev) => !prev)}
            />
          </Tooltip>
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
