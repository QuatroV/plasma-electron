import fs from "fs";

import FileTree, { Item } from "../FileTree";

// Mock fs module
jest.mock("fs");

describe("FileTree", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
  });

  it("creates an instance correctly", () => {
    const path = "/fixtures";
    const name = "dir";
    const fileTree = new FileTree(path, name);

    expect(fileTree.path).toEqual(path);
    expect(fileTree.name).toEqual(name);
    expect(fileTree.kind).toEqual("directory");
  });

  it("creates a file instance correctly", () => {
    const path = "/fixtures/file.txt";
    const name = "file.txt";
    const fileTree = new FileTree(path, name);

    expect(fileTree.path).toEqual(path);
    expect(fileTree.name).toEqual(name);
    expect(fileTree.kind).toEqual("file");
  });

  it("builds the file tree correctly", () => {
    const path = "/fixtures";
    const fileTree = new FileTree(path);

    (fs.readdirSync as jest.Mock).mockReturnValueOnce(["file.txt"]);
    (fs.statSync as jest.Mock).mockReturnValueOnce({
      isDirectory: () => false,
    });

    fileTree.build();

    expect(fileTree.items.length).toEqual(1);
    expect(fileTree.items[0].name).toEqual("file.txt");
    expect(fileTree.items[0].kind).toEqual("file");
  });

  it("gets files by condition correctly", () => {
    const path = "/fixtures";
    const fileTree = new FileTree(path);

    (fs.readdirSync as jest.Mock).mockReturnValueOnce(["file.txt", "file.js"]);
    (fs.statSync as jest.Mock)
      .mockReturnValueOnce({ isDirectory: () => false })
      .mockReturnValueOnce({ isDirectory: () => false });

    fileTree.build();

    const jsFiles: Item[] = fileTree.getFilesByCondition((file: Item) =>
      file.name.endsWith(".js"),
    );

    expect(jsFiles.length).toEqual(1);
    expect(jsFiles[0].name).toEqual("file.js");
  });
});
