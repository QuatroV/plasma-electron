import { Terminal as TerminalInstance } from "xterm";
import { ipcRenderer } from "electron";
import { useEffect, useRef } from "react";
import clsxm from "../../../utils/clsxm";
import "xterm/css/xterm.css";
import { FitAddon } from "xterm-addon-fit";

type Props = {
  collapsed: boolean;
};

const Terminal = (props: Props) => {
  const { collapsed } = props;
  const terminalRef = useRef(null);

  useEffect(() => {
    if (!terminalRef) return;
    const terminal = new TerminalInstance({
      rows: 10,
      allowTransparency: true,
      cursorBlink: true,
    });
    terminal.write(`Console session started, ${new Date()}`);
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(terminalRef.current);
    terminal.onData((e) => {
      ipcRenderer.send("terminal:send-data", e);
    });
    ipcRenderer.on("terminal:get-data", (event, data) => {
      terminal.write(data);
    });

    const terminalResizeObserver = new ResizeObserver(function (entries) {
      // since we are observing only a single element, so we access the first element in entries array
      try {
        fitAddon && fitAddon.fit();
      } catch (err) {
        console.log(err);
      }
    });

    // start observing for resize
    terminalResizeObserver.observe(terminalRef.current);
  }, [terminalRef]);

  return (
    <div
      className={clsxm(
        "relative w-full rounded-lg bg-black p-2 transition-all",
        collapsed ? "hidden" : ""
      )}
    >
      <div ref={terminalRef} />
    </div>
  );
};

export default Terminal;
