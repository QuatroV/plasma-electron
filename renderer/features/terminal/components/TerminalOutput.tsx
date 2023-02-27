import { Terminal as TerminalInstance } from "xterm";
import { ipcRenderer } from "electron";
import { Dispatch, useEffect, useRef } from "react";
import clsxm from "../../../utils/clsxm";
import "xterm/css/xterm.css";
import { FitAddon } from "xterm-addon-fit";

type Props = {
  collapsed: boolean;
  hasOutputNotification: boolean;
  setHasOutputNotification: Dispatch<boolean>;
};

const TerminalOutput = (props: Props) => {
  const { collapsed, hasOutputNotification, setHasOutputNotification } = props;
  const outputTerminalRef = useRef(null);

  useEffect(() => {
    if (!outputTerminalRef) return;
    const terminal = new TerminalInstance({
      rows: 10,
      allowTransparency: true,
      cursorBlink: true,
    });
    terminal.write(`Console session started, ${new Date()}`);
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(outputTerminalRef.current);
    ipcRenderer.on("terminal:output-send-data", (event, data) => {
      terminal.reset();
      terminal.write(data);
      setHasOutputNotification(true);
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
    terminalResizeObserver.observe(outputTerminalRef.current);
  }, [outputTerminalRef, setHasOutputNotification]);

  if (!collapsed && hasOutputNotification) {
    setTimeout(() => setHasOutputNotification(false), 500);
  }

  return (
    <div
      className={clsxm(
        "relative w-full rounded-lg bg-black p-2 transition-all",
        collapsed ? "hidden" : ""
      )}
    >
      <div ref={outputTerminalRef} />
    </div>
  );
};

export default TerminalOutput;
