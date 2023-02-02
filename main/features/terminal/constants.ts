import os from "os";

export const shell = os.platform() === "win32" ? "powershell.exe" : "bash";
