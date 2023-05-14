import path from "path";
import { useEffect, useRef, useState } from "react";
import Editor, { Monaco, loader } from "@monaco-editor/react";

import useKeyPress from "../../../hooks/useKeyPress";
import useSaveFile from "../../../hooks/useSaveFile";
import useFileStore from "../../../stores/fileStore";
import isPackaged from "../../../utils/isPackaged";
import { NASM_SYNTAX } from "../constants/nasmSyntax";
import { uriFromPath } from "../utils";
import { LoadingPlaceholder } from "./LoadingPlaceholder";
import { OpenFilePlaceholder } from "./OpenFilePlaceholder";

const editorLocation = isPackaged()
  ? "../../../apps/ide/resources/extraResources/react-monaco/vs"
  : "../../../../../../apps/ide/extraResources/react-monaco/vs";

loader.config({
  paths: {
    vs: uriFromPath(path.join(__dirname, editorLocation)),
  },
});

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
    window.addEventListener("resize-editor", handleResize);
    window.addEventListener("resize", handleResize);
  }, []);

  const currentFile = useFileStore((state) => state.currentFile);
  const currentFileContent = useFileStore((state) => state.currentFileContent);
  const setCurrentFileContent = useFileStore(
    (state) => state.setCurrentFileContent,
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
      {currentFile ? (
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
