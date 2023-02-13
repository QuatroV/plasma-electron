import { spawn } from "child_process";
import path from "path";

export const runCommandInCmd = (commandLine: string) =>
  new Promise<string>((resolve, reject) => {
    const [command, ...args] = commandLine.split(/\s+/);
    const child = spawn(command, args);
    const output = [] as string[];
    child.stdout.on("data", (chunk) => output.push(chunk));
    child.on("close", () => resolve(output.join("").trim()));
    child.on("error", (error) => reject(error));
  });

export const changeExtension = (file, extension) => {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + extension);
};
