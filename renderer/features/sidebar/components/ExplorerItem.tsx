import ExplorerItemIcon from "./ExplorerItemIcon";

import { useDrag } from "react-dnd";
import ExplorerItemDirectory from "./ExplorerItemDirectory";
import ExplorerItemFile from "./ExplorerItemFile";

const getMarginLeftByNesting = (nestingLevel) => {
  switch (nestingLevel) {
    case 1:
      return "ml-2";
    case 2:
      return "ml-4";
    case 3:
      return "ml-6";
    case 4:
      return "ml-8";
    case 0:
    default:
      return "ml-0";
  }
};

const ExplorerItem = ({
  file,
  setVariant,
  setContextData,
  setPoint,
  isCurrentlyOpen,
  setContextMenuOpen,
  openFile,
  idx,
}) => {
  const { nestingLevel, kind } = file;

  const handleContextMenu = (e) => {
    if (file.kind === "file") {
      setVariant("explorerFile");
    } else {
      setVariant("explorerDirectory");
    }
    setContextData({ file });
    setPoint({ x: e.clientX, y: e.clientY });
    setContextMenuOpen(true);
  };

  const props = {
    file,
    setVariant,
    isCurrentlyOpen,
    openFile,
    idx,
    handleContextMenu,
    nestingLevel,
    getMarginLeftByNesting,
  };

  return kind === "directory" ? (
    <ExplorerItemDirectory {...props} />
  ) : (
    <ExplorerItemFile {...props} />
  );
};

export default ExplorerItem;
