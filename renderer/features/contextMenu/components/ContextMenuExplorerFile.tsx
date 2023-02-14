import useContextMenuStore from "../../../stores/contextMenuStore";
import ContextMenuItem from "./ContextMenuItem";

const ContextMenuExplorerFile = () => {
  const { file } = useContextMenuStore((state) => state.contextData);
  return (
    <>
      <h6 className="px-2 py-0.5 text-xs text-gray-500">{file.name}</h6>
      <ContextMenuItem>Rename file</ContextMenuItem>
      <ContextMenuItem>Delete file</ContextMenuItem>
    </>
  );
};

export default ContextMenuExplorerFile;
