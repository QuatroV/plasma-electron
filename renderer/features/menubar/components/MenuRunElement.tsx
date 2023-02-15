import { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import clsxm from "../../../utils/clsxm";
import useRunFile from "../hooks/useRunFile";
import { ImSpinner9 } from "react-icons/im";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import Dropdown from "../../../components/Dropdown";

const BuildAndRunCurrentFileOption = () => (
  <div>Build And Run Current File</div>
);

const BuildAndRunFileOption = () => <div>Build And Run File...</div>;

const BuildAndRunProjectOption = () => <div>Build And Run Project</div>;

const RunCurrentFileOption = () => <div>Run Current File</div>;

const RunFileOption = () => <div>Run File...</div>;

const RunProjectOption = () => <div>Run Project</div>;

const RunCurrentFileWithDebugOption = () => (
  <div>Run Current File With Debug</div>
);

const RunFileWithDebugOption = () => <div>Run File With Debug...</div>;

const RunProjectWithDebugOption = () => <div>Run Project With Debug</div>;

const MenuRunElement = (props) => {
  const { runFile, currentFileCanBeExecuted, isExecuting } = useRunFile();

  const options = [
    BuildAndRunCurrentFileOption,
    BuildAndRunFileOption,
    BuildAndRunProjectOption,
    "divider",
    RunCurrentFileOption,
    RunFileOption,
    RunProjectOption,
    "divider",
    RunCurrentFileWithDebugOption,
    RunFileWithDebugOption,
    RunProjectWithDebugOption,
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  return (
    <div
      className={clsxm(
        `non-draggable flex items-stretch rounded-lg border  font-rubik transition-all `,
        currentFileCanBeExecuted
          ? "cursor-pointer bg-white hover:shadow-lg"
          : "cursor-not-allowed"
      )}
      {...props}
    >
      <div
        onClick={runFile}
        className={clsxm(
          " flex h-[30px] items-center rounded-l-lg border-r py-1 px-2 ",
          currentFileCanBeExecuted && "active:bg-gray-300 active:shadow-inner"
        )}
      >
        Run
      </div>
      <div
        className={clsxm(
          "relative flex w-full items-center rounded-r-lg py-1 px-1",
          currentFileCanBeExecuted && "active:bg-gray-200 active:shadow-inner"
        )}
      >
        {isExecuting ? (
          <ImSpinner9 color="#727272" className="animate-spin" size={18} />
        ) : (
          <Dropdown
            options={options || []}
            ref={dropdownListRef}
            onClick={() => currentFileCanBeExecuted && setDropdownOpen(true)}
            dropdownOpen={dropdownOpen}
          >
            <div className="h-full">
              <IoMdArrowDropdown size={18} />
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default MenuRunElement;
