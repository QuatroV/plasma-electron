import { searchTree, searchTreeForManyItems } from "../treeSearch";

describe("Tree Search Functions", () => {
  const mockTree = {
    name: "root",
    kind: "directory",
    children: [
      { name: "file1", kind: "file", children: [] },
      {
        name: "subdirectory",
        kind: "directory",
        children: [
          { name: "file2", kind: "file" },
          { name: "file3", kind: "file" },
        ],
      },
    ],
  };

  describe("searchTree", () => {
    it("should return the correct element if it exists", () => {
      const result = searchTree(mockTree, "file2", "name", "children");
      expect(result).toEqual({ name: "file2", kind: "file" });
    });
  });
});
