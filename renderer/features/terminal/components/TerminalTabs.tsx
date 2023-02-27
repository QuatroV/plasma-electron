import { FaTerminal } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const TerminalTabs = ({
  collapsed,
  setCollapsed,
  tab,
  setTab,
  hasOutputNotification,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div
        className={` flex w-full items-center justify-between  ${
          collapsed ? "" : "mb-2"
        }`}
      >
        {!collapsed ? (
          <>
            <div className="flex items-center gap-2">
              {/* <div
            className={`cursor-pointer rounded-full pt-1 pb-1 pr-3 pl-3 transition-all hover:bg-white active:scale-105 ${
              tab === "errors" && "bg-white shadow"
            }`}
            onClick={() => setTab("errors")}
          >
            Errors
          </div> */}
              <div
                className={`cursor-pointer rounded-full pt-1 pr-3 pl-3 pb-1 transition-all hover:bg-white active:scale-105 ${
                  tab === "terminal" && "bg-white shadow"
                }`}
                onClick={() => setTab("terminal")}
              >
                Terminal
              </div>
              <div
                className={`relative flex cursor-pointer rounded-full pt-1 pr-3 pl-3 pb-1 transition-all hover:bg-white active:scale-105 ${
                  tab === "output" && "bg-white shadow"
                }`}
                onClick={() => setTab("output")}
              >
                Output{" "}
                {hasOutputNotification && (
                  <span className="animate-ping-appear ml-1">●</span>
                )}
              </div>{" "}
            </div>

            <IoIosArrowDown
              onClick={() => setCollapsed((prevState) => !prevState)}
              className="mr-1 cursor-pointer"
              size={20}
            />
          </>
        ) : (
          <FaTerminal />
        )}
      </div>
    </div>
  );
};

export default TerminalTabs;
