import useFileStore from "../../../stores/fileStore";
import { FaGitAlt } from "react-icons/fa";
import useGit from "../hooks/useGit";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "../../../components/Dropdown";
import { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const PushOption = () => {
  return <div>Push</div>;
};

const ForcePushOption = () => {
  return <div>Force Push</div>;
};

const SyncOption = () => {
  return <div>Sync</div>;
};

const options = [PushOption, ForcePushOption, SyncOption];

const GitExplorer = () => {
  const projectName = useFileStore((state) => state.projectName);

  const { isRepo, initRepo, gitDiff } = useGit();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  return (
    <>
      <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 py-1 px-2 text-sm font-semibold uppercase">
        {projectName}
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        {isRepo ? (
          <div className="flex h-full w-full flex-col justify-start p-2">
            <div className="mb-2 flex flex-col gap-2">
              <Input
                className="w-full px-2 py-0.5"
                placeholder="Commit message"
              />
              <div className="flex w-full gap-2">
                <Button className="flex-1 py-0.5">Commit</Button>
                <div className="relative flex items-stretch">
                  <Dropdown
                    dropdownOpen={dropdownOpen}
                    options={options || []}
                    ref={dropdownListRef}
                    onClick={() => setDropdownOpen(true)}
                    align="right"
                  >
                    <Button className="relative h-full py-0.5">
                      <IoMdArrowDropdown />
                    </Button>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold">Changes</div>
            </div>
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
