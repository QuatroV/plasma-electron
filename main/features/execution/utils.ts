import path from "path";

import type { ArrayOf } from "../../../types";
import { GCC_EXE_LOCATION, NASM_EXE_LOCATION } from "../../constants";
import { runCommandInCmd } from "../../utils";

export const changeExtension = (file: string, extension?: string) => {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + (extension || ""));
};

export const getExtension = (path) => path.split(".").pop();

export const buildFiles = async (
  paths: ArrayOf<"at least", 1, string>,
  platform: "win32",
  additionalParams = "",
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
) => {
  const linkCommand = `${GCC_EXE_LOCATION} ${paths.join(
    " ",
  )} -o ${executableFilePath}`;

  const linkingOutput = await runCommandInCmd(linkCommand);

  return linkingOutput;
};

export const runFile = async (path: string) => {
  const executingOutput = await runCommandInCmd(path);

  return executingOutput;
};
