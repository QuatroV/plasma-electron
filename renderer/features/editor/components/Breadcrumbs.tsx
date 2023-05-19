import useTabsStore from "../../../hooks/tabsStore";
import useFileStore from "../../../stores/fileStore";

const Breadcrumbs = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const rootPath = useFileStore((state) => state.rootPath);

  const activeTab = useTabsStore((state) => state.tabs.find((t) => t.active));

  const relativePath = currentFile?.path
    .replace(rootPath, "")
    .replaceAll("\\", "/");

  if (activeTab?.type === "lesson") {
    return (
      <div className="z-50 flex max-h-[23.2px] flex-row items-center justify-between border-b bg-white px-2 py-1 text-xs font-semibold shadow empty:hidden">
        Course
      </div>
    );
  }

  return (
    <div className="z-50 flex max-h-[23.2px] flex-row items-center justify-between bg-white px-2 py-1 text-xs font-semibold shadow empty:hidden">
      {relativePath}
    </div>
  );
};

export default Breadcrumbs;
