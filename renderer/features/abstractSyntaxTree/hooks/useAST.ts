import { CharStream, CommonTokenStream } from "antlr4";

import useFileStore from "../../../stores/fileStore";
import useTabsStore from "../../../stores/tabsStore";
import asmMASMLexer from "../../../utils/parsers/MASM/asmMASMLexer";
import asmMASMParser from "../../../utils/parsers/MASM/asmMASMParser";
import { treeToJSON } from "../../../utils/parsers/treeToJSON";
import useASTStore from "../stores/ASTStore";

const useAST = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const currentFileContent = useFileStore((state) => state.currentFileContent);
  const addTab = useTabsStore((state) => state.addTab);

  const setTree = useASTStore((state) => state.setTree);

  const buildAST = () => {
    addTab({ name: `${currentFile.name}`, type: "AST" });

    const currentFileString =
      typeof currentFileContent === "string"
        ? currentFileContent
        : new TextDecoder().decode(currentFileContent);

    const chars = new CharStream(currentFileString);
    const lexer = new asmMASMLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new asmMASMParser(tokens);

    const tree = parser.prog();

    const jsonTree = treeToJSON(tree);

    setTree(jsonTree);
  };

  return { buildAST };
};

export default useAST;
