import { useEffect, useRef } from "react";
import { Terminal as TerminalInstance } from "xterm";

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (!terminalRef) return;
    const terminal = new TerminalInstance();
    terminal.open(terminalRef.current);
    terminal.write("Hello world");
  }, [terminalRef]);

  return (
    <div
      className="fixed bottom-0 h-32 bg-gray-600 w-full border-t-2 border-gray-300"
      ref={terminalRef}
    />
  );
};

export default Terminal;
