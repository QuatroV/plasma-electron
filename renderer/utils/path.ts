export const normalizePath = (path: string) => path.replaceAll("\\", "/");

export const getPathWithoutFilename = (path: string) =>
  normalizePath(path).substring(0, normalizePath(path).lastIndexOf("/"));

export const getFileName = (path: string) =>
  normalizePath(path).split("/").reverse()[0];
