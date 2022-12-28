import useFileStore from "../../../stores/fileStore";

const Breadcrumbs = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const rootPath = useFileStore((state) => state.rootPath);

  const relativePath = currentFile?.path
    .replace(rootPath, "")
    .replaceAll("\\", "/");

  const fileStore = useFileStore((state) => state);

  return (
    <div className="z-50 flex max-h-[23.2px] flex-row items-center justify-between bg-white py-1 px-2 text-xs font-semibold shadow empty:hidden">
      {relativePath}
    </div>
  );
};

export default Breadcrumbs;
