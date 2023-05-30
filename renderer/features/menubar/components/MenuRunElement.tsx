import { useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";

import Dropdown from "../../../components/Dropdown";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import clsxm from "../../../utils/clsxm";
import useDebug from "../../debug/hooks/useDebug";
import useRunFile from "../hooks/useRunFile";

const MenuRunElement = (props) => {
  const { runFile, currentFileCanBeExecuted, isExecuting } = useRunFile();

  const { startDebug } = useDebug();

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

  const RunFileWithDebugOption = () => (
    <div onClick={() => startDebug()}>Run File With Debug...</div>
  );

  const options = [
    BuildAndRunCurrentFileOption,
    BuildAndRunFileOption,
    BuildAndRunProjectOption,
    "divider",
    RunCurrentFileOption,
    RunFileOption,
    RunProjectOption,
    "divider",
    RunFileWithDebugOption,
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
        `non-draggable font-rubik flex items-stretch rounded-lg  border bg-white transition-all hover:shadow-lg`,
        shakeEffect ? "animate-fast-shake" : "",
      )}
      onAnimationEnd={() => setShakeEffect(false)}
      {...props}
    >
      <div
        onClick={handleClickRunButton}
        title={!currentFileCanBeExecuted && "Wrong type of file"}
        className={clsxm(
          " flex h-[30px] items-center rounded-l-lg border-r px-2 py-1 ",
          currentFileCanBeExecuted
            ? "cursor-pointer active:bg-gray-300 active:shadow-inner"
            : "cursor-not-allowed",
        )}
      >
        Run
      </div>
      <div
        className={clsxm(
          "relative flex w-full cursor-pointer items-center rounded-r-lg px-1 py-1 active:bg-gray-200 active:shadow-inner",
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
