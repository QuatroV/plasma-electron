import path from "path";

export const EXTRA_RESOURCES_LOCATION = path.join(
  __dirname,
  "..",
  "extraResources",
);

export const MINGW_LOCATION = path.join(EXTRA_RESOURCES_LOCATION, "MinGW");

export const NASM_EXE_LOCATION = path.join(MINGW_LOCATION, "bin", "nasm.exe");

export const GCC_EXE_LOCATION = path.join(MINGW_LOCATION, "bin", "gcc.exe");
