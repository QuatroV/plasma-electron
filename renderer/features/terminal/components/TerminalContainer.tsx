import { useState } from "react";
import Image from "next/image";
import Terminal from "./Terminal";
import TerminalOutput from "./TerminalOutput";

type Tab = "errors" | "output" | "terminal";

const TerminalContainer = () => {
  const [tab, setTab] = useState<Tab>("terminal");
  const [collapsed, setCollapsed] = useState(false);

  const [hasOutputNotification, setHasOutputNotification] = useState(false);

  return (
    <div className="absolute bottom-2 w-full">
      <div
        className={`mx-5 rounded-lg border border-gray-300 bg-gradient-to-b from-gray-200 to-gray-300 p-2 shadow backdrop-blur-sm transition-all ${
          collapsed ? "cursor-pointer hover:scale-[1.005]" : ""
        }`}
        onClick={() => collapsed && setCollapsed(false)}
      >
        <div className="flex items-center justify-between">
          <div
            className={` flex items-center gap-2 font-rubik ${
              collapsed ? "" : "mb-2"
            }`}
          >
            {!collapsed ? (
              <>
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
                </div>
              </>
            ) : (
              <>Terminal</>
            )}
          </div>
          <div className="flex items-center">
            <Image
              alt="Expand"
              src="/sidebar/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
              onClick={() => setCollapsed((prevState) => !prevState)}
              className={`${
                collapsed ? "-rotate-180 group-hover:translate-x-1" : " "
              } cursor-pointer transition-all active:scale-110`}
              height="24"
              width="24"
            />
          </div>
        </div>

        <Terminal collapsed={tab !== "terminal" || collapsed} />
        <TerminalOutput
          collapsed={tab !== "output" || collapsed}
          hasOutputNotification={hasOutputNotification}
          setHasOutputNotification={setHasOutputNotification}
        />
      </div>
    </div>
  );
};

export default TerminalContainer;
