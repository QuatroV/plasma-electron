import { ipcRenderer } from "electron";
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

  return (
    <div className="fixed bottom-0 w-full border-t-2 border-gray-300 bg-gray-300">
      <div className="flex gap-2 p-1 font-rubik">
        <div
          className={`cursor-pointer rounded-full pt-1 pb-1 pr-3 pl-3 transition-all ${
            tab === "errors" && "bg-white shadow"
          }`}
          onClick={() => setTab("errors")}
        >
          Errors
        </div>
        <div
          className={`cursor-pointer rounded-full pt-1 pr-3 pl-3 transition-all ${
            tab === "output" && "bg-white shadow"
          }`}
          onClick={() => setTab("output")}
        >
          Output
        </div>
        <div
          className={`cursor-pointer rounded-full pt-1 pr-3 pl-3 transition-all ${
            tab === "terminal" && "bg-white shadow"
          }`}
          onClick={() => setTab("terminal")}
        >
          Terminal
        </div>
      </div>
      <div
        className="h-36 w-full  border-gray-300 bg-gray-600"
        ref={terminalRef}
      />
    </div>
  );
};

export default Terminal;
