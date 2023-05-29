import { Dispatch, useCallback, useEffect, useRef } from "react";
import { ipcRenderer } from "electron";
import { Terminal as TerminalInstance } from "xterm";

import clsxm from "../../../utils/clsxm";
import "xterm/css/xterm.css";
import { FitAddon } from "xterm-addon-fit";

import useExecutionStore from "../../../stores/executionStore";

type Props = {
  collapsed: boolean;
  hasOutputNotification: boolean;
  setHasOutputNotification: Dispatch<boolean>;
};

const TerminalOutput = (props: Props) => {
  const { collapsed, hasOutputNotification, setHasOutputNotification } = props;
  const outputTerminalRef = useRef(null);
  const termRef = useRef(null);

  const isExecuting = useExecutionStore((state) => state.isExecuting);

  const handleTerminalKey = (e) => {
    const terminal = termRef.current;
    const printable =
      e.domEvent.key === "backspace" ||
      (!e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey);

    if (e.domEvent.key === "Backspace") {
      e.domEvent.preventDefault(); // Prevent default Backspace behavior
      // Handle your custom backspace logic here
      // For example, removing the last character from the terminal:
      terminal.write("\b \b");
    } else {
      // Handle other key events as needed
    }

    if (
      e.domEvent.key === "Enter" &&
      useExecutionStore.getState().isExecuting
    ) {
      // Send the data to the server or perform any action here
      const currentLineIndex =
        terminal.buffer.active.baseY + terminal.buffer.active.cursorY;

      const lastLine = terminal.buffer.active
        .getLine(currentLineIndex)
        .translateToString();

      // Example: Send the input to the server
      ipcRenderer.send("terminal:output-fetch-data", {
        data: lastLine.trim(),
      });
      terminal.writeln(""); // Print a new line
    } else if (printable) {
      terminal.write(e.key);
    }
  };

  useEffect(() => {
    if (!outputTerminalRef) return;
    const terminal = new TerminalInstance({
      rows: 10,
      allowTransparency: true,
      cursorBlink: true,
    });
    termRef.current = terminal;
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(outputTerminalRef.current);
    terminal.onKey(handleTerminalKey);

    ipcRenderer.on("terminal:output-send-data", (event, data) => {
      terminal.write(data);
      terminal.writeln(""); // Print a new line
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

  useEffect(() => {
    if (isExecuting) {
      termRef.current.reset();
    }
  }, [isExecuting]);

  return (
    <div
      className={clsxm(
        "relative w-full rounded-lg bg-black p-2 transition-all",
        collapsed ? "hidden" : "",
      )}
    >
      <div ref={outputTerminalRef} />
    </div>
  );
};

export default TerminalOutput;
