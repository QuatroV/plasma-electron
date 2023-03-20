import useFileStore from "../../../stores/fileStore";

const ExplorerEmptySpace = ({
  setVariant,
  setContextData,
  setPoint,
  setContextMenuOpen,
}) => {
  const rootPath = useFileStore((state) => state.rootPath);
  const projectName = useFileStore((state) => state.projectName);

  const file = {
    path: rootPath,
    name: projectName,
    kind: "directory",
    items: null,
    visible: true,
  };

  const handleContextMenu = (e) => {
    setVariant("explorerDirectory");

    setContextData({ file });
    setPoint({ x: e.clientX, y: e.clientY });
    setContextMenuOpen(true);
  };

  return <div className="flex-1" onContextMenu={handleContextMenu}></div>;
};

export default ExplorerEmptySpace;
