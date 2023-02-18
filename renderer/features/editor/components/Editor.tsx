import Editor, { loader, Monaco } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import useKeyPress from "../../../hooks/useKeyPress";
import useSaveFile from "../../../hooks/useSaveFile";
import useFileStore from "../../../stores/fileStore";

import { AiOutlineCode } from "react-icons/ai";
import isPackaged from "../../../utils/isPackaged";
import { NASM_SYNTAX } from "../constants/nasmSyntax";

const path = require("path");

function ensureFirstBackSlash(str) {
  return str.length > 0 && str.charAt(0) !== "/" ? "/" + str : str;
}

function uriFromPath(_path) {
  const pathName = path.resolve(_path).replace(/\\/g, "/");
  return encodeURI("file://" + ensureFirstBackSlash(pathName));
}

const editorLocation = isPackaged()
  ? "../../../resources/extraResources/react-monaco/vs"
  : "../../../../../../extraResources/react-monaco/vs";

loader.config({
  paths: {
    vs: uriFromPath(path.join(__dirname, editorLocation)),
  },
});

const OpenFilePlaceholder = () => {
  return (
    <div className="flex h-2/3 items-center justify-center ">
      <div className="flex flex-col items-center gap-1">
        <AiOutlineCode size={140} color="#d4d4d8" />
        <span className="font-light text-zinc-500">
          Open some file to see content here...
        </span>
        <span className="text-xs font-light text-zinc-500">
          You can do this by choosing file in the sidebar
        </span>
      </div>
    </div>
  );
};

const LoadingPlaceholder = () => {
  return (
    <div className="flex h-2/3 items-center justify-center ">
      <div className="flex flex-col items-center ">
        <AiOutlineCode size={140} color="#d4d4d8" />
        <span className="font-light text-zinc-500">Opening file...</span>
      </div>
    </div>
  );
};

export default function MonacoEditorComponent() {
  const editorRef = useRef(null);

  const handleMount = (editor) => {
    editorRef.current = editor;
  };

  const handleResize = () => {
    if (!editorRef?.current) return;
    editorRef.current.layout({});
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const currentFile = useFileStore((state) => state.currentFile);
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

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.languages.register({ id: "nasm" });
    monaco.languages.setMonarchTokensProvider("nasm", NASM_SYNTAX as any);
  };

  return (
    <div className="relative h-full bg-white">
      {editorText || currentFile ? (
        <Editor
          language="nasm"
          theme="vs"
          loading={<LoadingPlaceholder />}
          value={editorText}
          onMount={handleMount}
          onChange={handleChange}
          beforeMount={handleEditorWillMount}
        />
      ) : (
        <OpenFilePlaceholder />
      )}
    </div>
  );
}
