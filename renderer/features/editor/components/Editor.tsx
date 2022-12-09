import Editor, { loader } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import useKeyPress from "../../../hooks/useKeyPress";
import useSaveFile from "../../../hooks/useSaveFile";
import useFileStore from "../../../stores/fileStore";
import * as monaco from "monaco-editor";

const path = require("path");

function ensureFirstBackSlash(str) {
  return str.length > 0 && str.charAt(0) !== "/" ? "/" + str : str;
}

function uriFromPath(_path) {
  const pathName = path.resolve(_path).replace(/\\/g, "/");
  return encodeURI("file://" + ensureFirstBackSlash(pathName));
}

loader.config({
  paths: {
    vs: uriFromPath(
      path.join(
        __dirname,
        "../../../../../../node_modules/monaco-editor/min/vs"
      )
    ),
  },
});

export default function MonacoEditorComponent() {
  const editorRef = useRef(null);

  const handleMount = (editor) => {
    editorRef.current = editor;
  };

  const handleResize = () => {
    if (!editorRef?.current) return;
    editorRef.current.layout();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const currentFileContent = useFileStore((state) => state.currentFileContent);
  const setCurrentFileContent = useFileStore(
    (state) => state.setCurrentFileContent
  );
  const [editorText, setEditorText] = useState("");

  useEffect(() => {
    const handleFileChange = async () => {
      const currentFileString =
        typeof currentFileContent === "string"
          ? currentFileContent
          : new TextDecoder().decode(currentFileContent);
      setEditorText(currentFileString);
    };
    handleFileChange();
  }, [currentFileContent]);

  const handleChange = (value: string) => {
    setCurrentFileContent(new TextEncoder().encode(value));
  };

  const { saveFile } = useSaveFile();
  const editorContainerRef = useRef(null);
  useKeyPress(["s"], () => saveFile(), editorContainerRef.current, "ctrlKey");

  return (
    <div className="relative" ref={editorContainerRef}>
      <Editor
        height="calc(100vh - 72px)"
        language="javascript"
        value={editorText || "//Open some file to see content here..."}
        onMount={handleMount}
        onChange={handleChange}
      />
    </div>
  );
}
