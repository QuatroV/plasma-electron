import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { useEffect, useRef } from "react";
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

export default function MonacoEditorComponent({ value }: { value: string }) {
  const editorRef = useRef(null);

  const handleMount = (editor) => {
    editorRef.current = editor;
    console.log(editorRef.current);
  };

  const handleResize = () => {
    console.log(editorRef?.current);
    if (!editorRef?.current) return;
    editorRef.current.layout();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Editor
      height="calc(100vh - 72px)"
      language="javascript"
      theme="vs-dark"
      value={value}
      onMount={handleMount}
    />
  );
}
