import { BsPlusLg } from "react-icons/bs";
import { CgRemoveR } from "react-icons/cg";
import { StatusResult } from "simple-git";
import Tooltip from "../../../components/Tooltip";
import FileIcon from "./FileIcon";

type Props = {
  gitStatus: StatusResult;
  addFilesToStaged: (values: string[]) => void;
  removeFilesFromStaged: (values: string[]) => void;
};

const CommitChanges = (props: Props) => {
  const { gitStatus, addFilesToStaged, removeFilesFromStaged } = props;

  const { not_added, staged } = gitStatus;

  return (
    <div>
      {staged.length ? (
        <>
          <div className="mb-1 flex items-center justify-between px-2 text-sm font-bold">
            <div>Staged Changes</div>
            <Tooltip tooltip={<span>Discard all staged changes</span>}>
              <CgRemoveR
                className="cursor-pointer text-gray-700 "
                title=""
                size={16}
                onClick={() => removeFilesFromStaged(["."])}
              />
            </Tooltip>
          </div>
          <div>
            {staged.map((fileName, idx) => (
              <div
                className="group relative flex items-center justify-between py-0.5 px-1 text-sm hover:bg-gray-300"
                key={idx}
              >
                <div className="flex items-center gap-1 overflow-hidden">
                  <div>
                    <FileIcon fileExtension={fileName.split(".").pop()} />
                  </div>
                  <div className="w-inherit overflow-hidden text-ellipsis whitespace-nowrap">
                    {fileName}
                  </div>
                </div>
                <div className="invisible absolute right-0 flex items-center gap-1 rounded bg-gray-300 px-1 group-hover:visible">
                  <CgRemoveR
                    className="cursor-pointer text-gray-700 "
                    title="Discard changes"
                    size={16}
                    onClick={() => removeFilesFromStaged([fileName])}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
      {not_added.length ? (
        <>
          <div className="my-1 flex justify-between px-2 text-sm font-bold">
            <div>Changes</div>
            <div className=" flex items-center gap-1">
              <Tooltip tooltip={<span>Discard all changes</span>}>
                <CgRemoveR
                  className="cursor-pointer text-gray-700 "
                  size={16}
                />
              </Tooltip>
              <Tooltip
                tooltip={<span>Add all unstaged changes to commit</span>}
              >
                <BsPlusLg
                  className="cursor-pointer text-gray-700 "
                  size={12}
                  onClick={() => addFilesToStaged(["."])}
                />
              </Tooltip>
            </div>
          </div>
          <div>
            {not_added.map((fileName, idx) => (
              <div
                className="group relative flex items-center justify-between py-0.5 px-1 text-sm hover:bg-gray-300"
                key={idx}
              >
                <div className="flex items-center gap-1 overflow-hidden">
                  <div>
                    <FileIcon fileExtension={fileName.split(".").pop()} />
                  </div>
                  <div className="w-inherit overflow-hidden text-ellipsis whitespace-nowrap">
                    {fileName}
                  </div>
                </div>
                <div className="invisible absolute right-0 flex items-center gap-1 rounded bg-gray-300 px-1 group-hover:visible">
                  <CgRemoveR
                    className="cursor-pointer text-gray-700 "
                    title="Discard changes"
                    size={16}
                  />
                  <Tooltip tooltip={<span>Add file to commit</span>}>
                    <BsPlusLg
                      className="cursor-pointer text-gray-700 "
                      size={12}
                      onClick={() => addFilesToStaged([fileName])}
                    />
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CommitChanges;
