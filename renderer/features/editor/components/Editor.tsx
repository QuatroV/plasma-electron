import Editor, { loader } from "@monaco-editor/react";
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

export default function MonacoEditorComponent({ value }: { value: string }) {
  return (
    <>
      <Editor
        height="100%"
        width="100%"
        language="javascript"
        theme="vs-dark"
        value={value}
      />
    </>
  );
}
