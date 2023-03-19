import asmMASMLexer from "./MASM/asmMASMLexer";

export const treeToJSON = (tree: any) => {
  const map = {};
  traverse(tree, map);
  return JSON.stringify(map);
};

const traverse = (tree: any, map: Record<string, any>) => {
  if (tree.symbol) {
    map.attributes = { type: asmMASMLexer.ruleNames[tree.symbol.type] };
  }
  map.name = tree.getText();
  if (tree.children) {
    map.children = [];

    tree.children.forEach((element: any) => {
      const nested = {};
      traverse(element, nested);
      map.children.push(nested);
    });
  }
};
