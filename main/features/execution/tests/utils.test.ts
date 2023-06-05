import fs from "fs";
import path from "path";

import { runCommandInCmd } from "../../../utils";
import { buildFiles, changeExtension, linkFiles, runFile } from "../utils";
import { TEST_PROGRAM } from "./fixtures";

describe("runCommandInCmd", () => {
  test("Should resolve with the correct output when the command succeeds", async () => {
    const result = await runCommandInCmd("echo Hello!");
    expect(result).toBe("Hello!");
  });

  test("Should reject with an error when the command fails", async () => {
    await expect(runCommandInCmd("invalidCommand")).rejects.toThrow();
  });

  test("Should reject with a specific error message when the command fails", async () => {
    await expect(runCommandInCmd("invalidCommand")).rejects.toThrow(
      "spawn invalidCommand ENOENT",
    );
  });
});

describe("changeExtension", () => {
  test("Should change the file extension when an extension is provided", () => {
    fs.writeFileSync("file.txt", "File content");
    const result = changeExtension("file.txt", ".csv");
    expect(result).toBe("file.csv");
    fs.unlinkSync("file.txt");
  });

  test("Should remove the file extension when no extension is provided", () => {
    fs.writeFileSync("file.txt", "File content");
    const result = changeExtension("file.txt");
    expect(result).toBe("file");
    fs.unlinkSync("file.txt");
  });

  test("Should handle file paths without extensions", () => {
    fs.writeFileSync("file", "File content");
    const result = changeExtension("file", ".csv");
    expect(result).toBe("file.csv");
    fs.unlinkSync("file");
  });

  test("Should handle file paths with multiple dots in the filename", () => {
    fs.writeFileSync("my.file.txt", "File content");
    const result = changeExtension("my.file.txt", ".csv");
    expect(result).toBe("my.file.csv");
    fs.unlinkSync("my.file.txt");
  });
});

describe("buildFiles", () => {
  test("Should generate object files", async () => {
    fs.writeFileSync(path.join(__dirname, "path1.asm"), "# test comment");
    fs.writeFileSync(path.join(__dirname, "path2.asm"), "# test comment");

    await buildFiles(
      [path.join(__dirname, "path1.asm"), path.join(__dirname, "path2.asm")],
      "win32",
    );

    expect(fs.existsSync(path.join(__dirname, "path1.obj"))).toBe(true);
    expect(fs.existsSync(path.join(__dirname, "path2.obj"))).toBe(true);
  });

  afterAll(() => {
    fs.unlinkSync(path.join(__dirname, "path1.asm"));
    fs.unlinkSync(path.join(__dirname, "path2.asm"));
    fs.unlinkSync(path.join(__dirname, "path1.obj"));
    fs.unlinkSync(path.join(__dirname, "path2.obj"));
  });
});

describe("linkFiles and runFile", () => {
  test("Should build and link object files and create executable and run it", async () => {
    fs.writeFileSync(path.join(__dirname, "path1.asm"), TEST_PROGRAM);

    await buildFiles([path.join(__dirname, "path1.asm")], "win32");

    console.log(path.join(__dirname, "path1.obj"));

    const linkingOutput = await linkFiles([path.join(__dirname, "path1.obj")]);

    console.log({ linkingOutput });

    expect(fs.existsSync(path.join(__dirname, "path1.exe"))).toBe(true);

    const executionOutput = await runFile(path.join(__dirname, "path1.exe"));

    expect(executionOutput).toBe("Hello world");
  });

  afterAll(() => {
    fs.unlinkSync(path.join(__dirname, "path1.asm"));
    fs.unlinkSync(path.join(__dirname, "path1.obj"));
    fs.unlinkSync(path.join(__dirname, "path1.exe"));
  });
});
