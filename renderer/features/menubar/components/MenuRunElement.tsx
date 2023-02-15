import { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import clsxm from "../../../utils/clsxm";
import useRunFile from "../hooks/useRunFile";
import { ImSpinner9 } from "react-icons/im";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import Dropdown from "../../../components/Dropdown";

const MenuRunElement = (props) => {
  const { runFile, currentFileCanBeExecuted, isExecuting } = useRunFile();

  const BuildAndRunCurrentFileOption = () => (
    <div
      onClick={runFile}
      title={!currentFileCanBeExecuted && "Wrong type of file"}
      className={
        !currentFileCanBeExecuted && "cursor-not-allowed text-gray-500"
      }
    >
      Build And Run Current File{" "}
    </div>
  );

  const BuildAndRunFileOption = () => <div>Build And Run File...</div>;

  const BuildAndRunProjectOption = () => <div>Build And Run Project</div>;

  const RunCurrentFileOption = () => (
    <div
      onClick={() => null}
      title={!currentFileCanBeExecuted && "Wrong type of file"}
      className={
        !currentFileCanBeExecuted && "cursor-not-allowed text-gray-500"
      }
    >
      Run Current File
    </div>
  );

  const RunFileOption = () => <div>Run File...</div>;

  const RunProjectOption = () => <div>Run Project</div>;

  const RunCurrentFileWithDebugOption = () => (
    <div
      onClick={() => null}
      title={!currentFileCanBeExecuted && "Wrong type of file"}
      className={
        !currentFileCanBeExecuted && "cursor-not-allowed text-gray-500"
      }
    >
      Run Current File With Debug
    </div>
  );

  const RunFileWithDebugOption = () => <div>Run File With Debug...</div>;

  const RunProjectWithDebugOption = () => <div>Run Project With Debug</div>;

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

  const [shakeEffect, setShakeEffect] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  const handleClickRunButton = () => {
    if (currentFileCanBeExecuted) {
      runFile();
    } else {
      setShakeEffect(true);
    }
  };

  return (
    <div
      className={clsxm(
        `non-draggable flex items-stretch rounded-lg border  bg-white font-rubik transition-all hover:shadow-lg`,
        shakeEffect ? "animate-fast-shake" : ""
      )}
      onAnimationEnd={() => setShakeEffect(false)}
      {...props}
    >
      <div
        onClick={handleClickRunButton}
        title={!currentFileCanBeExecuted && "Wrong type of file"}
        className={clsxm(
          " flex h-[30px] items-center rounded-l-lg border-r py-1 px-2 ",
          currentFileCanBeExecuted
            ? "cursor-pointer active:bg-gray-300 active:shadow-inner"
            : "cursor-not-allowed"
        )}
      >
        Run
      </div>
      <div
        className={clsxm(
          "relative flex w-full cursor-pointer items-center rounded-r-lg py-1 px-1 active:bg-gray-200 active:shadow-inner"
        )}
      >
        {isExecuting ? (
          <ImSpinner9 color="#727272" className="animate-spin" size={18} />
        ) : (
          <Dropdown
            options={options || []}
            ref={dropdownListRef}
            onClick={() => setDropdownOpen(true)}
            dropdownOpen={dropdownOpen}
            dropdownStyles="left-0"
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
