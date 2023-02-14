import { IoMdArrowDropdown } from "react-icons/io";
import clsxm from "../../../utils/clsxm";
import useRunFile from "../hooks/useRunFile";
import { ImSpinner9 } from "react-icons/im";

const MenuRunElement = (props) => {
  const { runFile, currentFileCanBeExecuted, isExecuting } = useRunFile();
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
          "flex h-[30px] w-full items-center rounded-r-lg py-1 px-1 ",
          currentFileCanBeExecuted && "active:bg-gray-200 active:shadow-inner"
        )}
      >
        {isExecuting ? (
          <ImSpinner9 color="#727272" className="animate-spin" size={18} />
        ) : (
          <IoMdArrowDropdown size={18} />
        )}
      </div>
    </div>
  );
};

export default MenuRunElement;
