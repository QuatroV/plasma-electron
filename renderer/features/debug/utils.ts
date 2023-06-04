const possibleRegisterNames = [
  "eax",
  "ecx",
  "edx",
  "ebx",
  "esp",
  "ebp",
  "esi",
  "edi",
  "eip",
  "eflags",
  "cs",
  "ss",
  "ds",
  "es",
  "fs",
  "gs",
];

export const transformRegistersResponse = (resp: string) => {
  const lines = resp.split("\n");

  const registers = {};
  let flags = [];

  lines.forEach((line) => {
    if (line.startsWith("eflags")) {
      // Extract the values between brackets using a regular expression
      const values = line
        .match(/\[(.*?)\]/)[1]
        .split(" ")
        .filter(Boolean);

      flags = values;
    } else if (possibleRegisterNames.includes(line.split(" ")[0])) {
      const [key, value] = line
        .replace(/\s+/, " ")
        .replaceAll("\r", "")
        .split(" ");
      const [hexValue, info] = value.split("\t");
      registers[key] = {
        hexValue,
        info,
      };
    }
  });

  return { registers, flags };
};
