import FileTree from "./FileTree";

export const buildFileTree = (path: string) => {
  const fileTree = new FileTree(path);
  fileTree.build();
  return fileTree;
};
