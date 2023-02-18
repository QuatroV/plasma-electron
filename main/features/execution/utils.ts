import { spawn } from "child_process";
import path from "path";
import type { ArrayOf } from "../../../types";
import { GCC_EXE_LOCATION, NASM_EXE_LOCATION } from "./constants";

export const runCommandInCmd = (commandLine: string) =>
  new Promise<string>((resolve, reject) => {
    const [command, ...args] = commandLine.split(/\s+/);
    const child = spawn(command, args);
    const output = [] as string[];
    child.stdout.on("data", (chunk) => output.push(chunk));
    child.on("close", () => resolve(output.join("").trim()));
    child.on("error", (error) => reject(error));
  });

export const changeExtension = (file: string, extension?: string) => {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + extension);
};

export const getExtension = (path) => path.split(".").pop();

export const buildFiles = async (
  paths: ArrayOf<"at least", 1, string>,
  platform: "win32",
  additionalParams = ""
) => {
  const result: string[] = [];
  for (let i = 0; i < paths.length; ++i) {
    const generateObjCommand = `${NASM_EXE_LOCATION} -f ${platform} ${paths[i]} ${additionalParams}`;

    const nasmObjGenerationOutput = await runCommandInCmd(generateObjCommand);

    result.push(nasmObjGenerationOutput);
  }

  return result.join(";");
};

export const linkFiles = async (
  paths: ArrayOf<"at least", 1, string>,
  executableFilePath = changeExtension(paths[0], ".exe"),
  additionalParams = ""
) => {
  const linkCommand = `${GCC_EXE_LOCATION} ${paths.join(
    " "
  )} -o ${executableFilePath} ${additionalParams}`;

  console.log("link command ", linkCommand);

  const linkingOutput = await runCommandInCmd(linkCommand);

  return linkingOutput;
};

export const runFile = async (path: string) => {
  const executingOutput = await runCommandInCmd(path);

  return executingOutput;
};
