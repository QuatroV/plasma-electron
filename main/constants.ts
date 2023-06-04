import path from "path";

export const isProd: boolean = process.env.NODE_ENV === "production";

export const PLASMA_APP_URL: string = "plasma-app";

export const EXTRA_RESOURCES_LOCATION = path.join(
  __dirname,
  "..",
  "extraResources",
);

export const MINGW_LOCATION = path.join(EXTRA_RESOURCES_LOCATION, "MinGW");

export const NASM_EXE_LOCATION = path.join(MINGW_LOCATION, "bin", "nasm.exe");

export const GCC_EXE_LOCATION = path.join(MINGW_LOCATION, "bin", "gcc.exe");

export const GDB_EXE_LOCATION = path.join(MINGW_LOCATION, "bin", "gdb.exe");

export const OLLY_DBG_EXE_LOCATION = path.join(
  EXTRA_RESOURCES_LOCATION,
  "ollydbg",
  "OLLYDBG.exe",
);
