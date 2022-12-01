import { ipcRenderer } from "electron";
import { useEffect, useRef } from "react";
import { Terminal as TerminalInstance } from "xterm";

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

  return (
    <div className="fixed bottom-0 w-full border-t-2 border-gray-300 bg-gray-300">
      <div className="flex gap-2 p-1 font-rubik">
        <div className="rounded  p-1 ">Errors</div>
        <div className="rounded p-1 ">Output</div>
        <div className="rounded bg-white p-1 shadow">Terminal</div>
      </div>
      <div
        className="h-36 w-full  border-gray-300 bg-gray-600"
        ref={terminalRef}
      />
    </div>
  );
};

export default Terminal;
