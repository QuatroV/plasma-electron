import { Dispatch, useCallback, useEffect, useRef } from "react";
import { ipcRenderer } from "electron";
import { Terminal as TerminalInstance } from "xterm";

import clsxm from "../../../utils/clsxm";
import "xterm/css/xterm.css";
import { FitAddon } from "xterm-addon-fit";

import useExecutionStore from "../../../stores/executionStore";

type Props = {
  collapsed: boolean;
  hasDebugNotification: boolean;
  setHasDebugNotification: Dispatch<boolean>;
};

const TerminalDebug = (props: Props) => {
  const { collapsed, hasDebugNotification, setHasDebugNotification } = props;
  const debugTerminalRef = useRef(null);
  const termRef = useRef(null);

  const isDebugging = useExecutionStore((state) => state.isDebugging);

  const handleTerminalKey = (e) => {
    console.log(e);
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
      useExecutionStore.getState().isDebugging
    ) {
      // Send the data to the server or perform any action here
      const currentLineIndex =
        terminal.buffer.active.baseY + terminal.buffer.active.cursorY;

      const lastLine = terminal.buffer.active
        .getLine(currentLineIndex)
        .translateToString();

      console.log({ lastLine });

      // Example: Send the input to the server
      ipcRenderer.send("terminal:debug-fetch-data", {
        data: lastLine.trim(),
      });
      terminal.writeln(""); // Print a new line
    } else if (printable) {
      terminal.write(e.key);
    }
  };

  useEffect(() => {
    if (!debugTerminalRef) return;
    const terminal = new TerminalInstance({
      rows: 10,
      allowTransparency: true,
      cursorBlink: true,
    });
    termRef.current = terminal;
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(debugTerminalRef.current);
    terminal.onKey(handleTerminalKey);

    ipcRenderer.on("terminal:debug-send-data", (event, params) => {
      console.log("debug-data ", params);

      const { data: txt } = params;
      const lines = txt.split(/\n/);

      lines.forEach((l) => terminal.write(l + "\r\n"));

      setHasDebugNotification(true);
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
    terminalResizeObserver.observe(debugTerminalRef.current);
  }, [debugTerminalRef, setHasDebugNotification]);

  if (!collapsed && hasDebugNotification) {
    setTimeout(() => setHasDebugNotification(false), 500);
  }

  useEffect(() => {
    if (isDebugging) {
      termRef.current.reset();
    }
  }, [isDebugging]);

  return (
    <div
      className={clsxm(
        "relative w-full rounded-lg bg-black p-2 transition-all",
        collapsed ? "hidden" : "",
      )}
    >
      <div ref={debugTerminalRef} />
    </div>
  );
};

export default TerminalDebug;
