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

    it("should return null if the element does not exist", () => {
      const result = searchTree(mockTree, "non-existent", "name", "children");
      expect(result).toBeNull();
    });
  });

  describe("searchTreeForManyItems", () => {
    it("should return an array of the correct elements if they exist", async () => {
      const result = await searchTreeForManyItems(
        mockTree,
        "file",
        "name",
        "children",
      );

      expect(result).toEqual([
        { name: "file1", kind: "file", children: [] },
        { name: "file2", kind: "file" },
        { name: "file3", kind: "file" },
      ]);
    });

    it("should return an empty array if no matching elements exist", async () => {
      const result = await searchTreeForManyItems(
        mockTree,
        "non-existent",
        "name",
        "children",
      );
      expect(result).toEqual([]);
    });
  });
});
