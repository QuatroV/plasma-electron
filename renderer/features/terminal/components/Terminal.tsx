import { ipcRenderer } from "electron";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Terminal as TerminalInstance } from "xterm";

type Tab = "errors" | "output" | "terminal";

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (!terminalRef) return;
    const terminal = new TerminalInstance({ allowTransparency: true });
    terminal.open(terminalRef.current);
    terminal.onData((e) => {
      ipcRenderer.send("terminal:send-data", e);
    });
    ipcRenderer.on("terminal:get-data", (event, data) => {
      terminal.write(data);
    });
  }, [terminalRef]);

  const [tab, setTab] = useState<Tab>("terminal");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="absolute bottom-10 w-full">
      <div
        className={`mx-5 rounded-lg border border-gray-300 bg-gradient-to-b from-gray-200 to-gray-300 p-2 shadow backdrop-blur-sm transition-all ${
          collapsed ? "cursor-pointer" : ""
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
                <div
                  className={`cursor-pointer rounded-full pt-1 pb-1 pr-3 pl-3 transition-all hover:bg-white active:scale-105 ${
                    tab === "errors" && "bg-white shadow"
                  }`}
                  onClick={() => setTab("errors")}
                >
                  Errors
                </div>
                <div
                  className={`cursor-pointer rounded-full pt-1 pr-3 pl-3 pb-1 transition-all hover:bg-white active:scale-105 ${
                    tab === "output" && "bg-white shadow"
                  }`}
                  onClick={() => setTab("output")}
                >
                  Output
                </div>
                <div
                  className={`cursor-pointer rounded-full pt-1 pr-3 pl-3 pb-1 transition-all hover:bg-white active:scale-105 ${
                    tab === "terminal" && "bg-white shadow"
                  }`}
                  onClick={() => setTab("terminal")}
                >
                  Terminal
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

        <div
          className={`relative w-full rounded-lg border-gray-300 bg-gradient-to-b from-gray-600 to-gray-700 transition-all ${
            collapsed ? "invisible h-0" : "h-36"
          }`}
          ref={terminalRef}
        />
      </div>
    </div>
  );
};

export default Terminal;
