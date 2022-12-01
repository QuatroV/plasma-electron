import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import useFileStore from "../../../stores/fileStore";
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

  return (
    <div className="relative">
      {!currentFileContent && (
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-25 font-rubik backdrop-blur-sm">
          <div className=" text-3xl font-extrabold text-white">
            Open a file to see content here
          </div>
        </div>
      )}
      <Editor
        height="calc(100vh - 72px)"
        language="javascript"
        value={editorText}
        onMount={handleMount}
        onChange={handleChange}
      />
    </div>
  );
}
