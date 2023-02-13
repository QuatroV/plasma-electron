import fs from "fs";
import path from "path";

type Item = {
  path: string;
  name: string;
  items: Item[];
  nestingLevel: number;
  kind: "directory" | "file";
};

export default class FileTree {
  path: string;
  name: string;
  items: Item[];
  nestingLevel: number;
  kind: "directory" | "file";

  constructor(path, name = null) {
    this.path = path;
    this.name = name;
    this.items = [];
    this.nestingLevel = 0;

    const extensionRegExp = /(?:\.([^.]+))?$/;
    const extension = extensionRegExp.exec(name)[1];

    this.kind = extension === undefined ? "directory" : "file";
  }

  build = () => {
    this.items = this.readDir(this.path, 0);
  };

  readDir(path, nestingLevel) {
    const fileArray = [];

    fs.readdirSync(path).forEach((file) => {
      const fileInfo = new FileTree(`${path}\\${file}`, file);
      fileInfo.nestingLevel = nestingLevel;

      const stat = fs.statSync(fileInfo.path);

      if (stat.isDirectory()) {
        fileInfo.items = this.readDir(fileInfo.path, nestingLevel + 1);
      }

      fileArray.push(fileInfo);
    });

    return fileArray;
  }
}
