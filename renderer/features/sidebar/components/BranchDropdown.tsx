import { useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";
import { GoGitBranch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { StatusResult } from "simple-git";
import Dropdown from "../../../components/Dropdown";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useGitStore from "../stores/gitStore";

type Props = {
  gitStatus: StatusResult;
};

const AddBranchElement = () => {
  return (
    <div className="flex items-center justify-between">
      Create New Branch
      <BsPlusLg
        className="cursor-pointer text-gray-700 "
        title="Add all files to commit"
        size={12}
      />
    </div>
  );
};

const BranchDropdown = ({ gitStatus }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  const currentRemote = useGitStore((state) =>
    state.remotes.find((remote) => remote.current)
  );

  const options = currentRemote.branches
    .map(
      (branch, idx) =>
        function BranchDropdownItem() {
          return <div key={idx}>{branch.name}</div>;
        }
    )
    .concat([AddBranchElement]);

  return (
    <div className="relative text-sm">
      <Dropdown
        dropdownOpen={dropdownOpen}
        options={options}
        ref={dropdownListRef}
        onClick={() => setDropdownOpen(true)}
        dropdownStyles="top-full right-0 rounded mt-2 mx-2 left-0"
      >
        <div className="mx-2 mt-2 flex cursor-pointer items-center justify-between rounded bg-gradient-to-r from-white to-gray-200 px-2 py-0.5">
          <div className="flex items-center gap-1">
            <GoGitBranch />
            {gitStatus.current}
          </div>
          <IoIosArrowDown />
        </div>
      </Dropdown>
    </div>
  );
};

export default BranchDropdown;
