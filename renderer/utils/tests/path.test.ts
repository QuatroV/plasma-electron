import { getFileName, getPathWithoutFilename, normalizePath } from "../path";

describe("Path Functions", () => {
  describe("normalizePath", () => {
    it("should replace backslashes with forward slashes", () => {
      const path = "\\path\\to\\file";
      const expected = "/path/to/file";

      expect(normalizePath(path)).toEqual(expected);
    });

    it("should handle paths without backslashes", () => {
      const path = "/path/to/file";
      const expected = "/path/to/file";

      expect(normalizePath(path)).toEqual(expected);
    });
  });

  describe("getPathWithoutFilename", () => {
    it("should return path without filename", () => {
      const path = "/path/to/file.txt";
      const expected = "/path/to";

      expect(getPathWithoutFilename(path)).toEqual(expected);
    });

    it("should handle paths without directories", () => {
      const path = "file.txt";
      const expected = "";

      expect(getPathWithoutFilename(path)).toEqual(expected);
    });
  });

  describe("getFileName", () => {
    it("should return filename from path", () => {
      const path = "/path/to/file.txt";
      const expected = "file.txt";

      expect(getFileName(path)).toEqual(expected);
    });

    it("should handle paths without directories", () => {
      const path = "file.txt";
      const expected = "file.txt";

      expect(getFileName(path)).toEqual(expected);
    });
  });
});
