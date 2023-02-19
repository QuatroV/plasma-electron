import { BsPlusLg } from "react-icons/bs";
import { CgRemoveR } from "react-icons/cg";
import { StatusResult } from "simple-git";
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
            <CgRemoveR
              className="cursor-pointer text-gray-700 "
              title="Discard all staged changes"
              size={16}
              onClick={() => removeFilesFromStaged(["."])}
            />
          </div>
          <div>
            {staged.map((fileName, idx) => (
              <div
                className="group flex items-center justify-between py-0.5 px-1 text-sm hover:bg-gray-300"
                key={idx}
              >
                <div className="flex items-center gap-1">
                  <FileIcon fileExtension={fileName.split(".").pop()} />
                  <div>{fileName}</div>
                </div>
                <div className="invisible flex items-center gap-1 pr-1 group-hover:visible">
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
              <CgRemoveR
                className="cursor-pointer text-gray-700 "
                title="Discard all changes"
                size={16}
              />
              <BsPlusLg
                className="cursor-pointer text-gray-700 "
                title="Add all files to commit"
                size={12}
                onClick={() => addFilesToStaged(["."])}
              />
            </div>
          </div>
          <div>
            {not_added.map((fileName, idx) => (
              <div
                className="group flex items-center justify-between py-0.5 px-1 text-sm hover:bg-gray-300"
                key={idx}
              >
                <div className="flex items-center gap-1">
                  <FileIcon fileExtension={fileName.split(".").pop()} />
                  <div>{fileName}</div>
                </div>
                <div className="invisible flex items-center gap-1 pr-1 group-hover:visible">
                  <CgRemoveR
                    className="cursor-pointer text-gray-700 "
                    title="Discard changes"
                    size={16}
                  />
                  <BsPlusLg
                    className="cursor-pointer text-gray-700 "
                    title="Add file to commit"
                    size={12}
                    onClick={() => addFilesToStaged([fileName])}
                  />
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
