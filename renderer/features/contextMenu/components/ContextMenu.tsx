import { useRef, useEffect } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useContextMenuStore from "../../../stores/contextMenuStore";
import ContextMenuExplorerDirectory from "./ContextMenuExplorerDirectory";
import ContextMenuExplorerFile from "./ContextMenuExplorerFile";
import ContextMenuTab from "./ContextMenuTab";

const ContextMenuContent = {
  explorerDirectory: <ContextMenuExplorerDirectory />,
  explorerFile: <ContextMenuExplorerFile />,
  tab: <ContextMenuTab />,
};

const ContextMenu = () => {
  const isOpen = useContextMenuStore((state) => state.isOpen);
  const setIsOpen = useContextMenuStore((state) => state.setIsOpen);
  const point = useContextMenuStore((state) => state.point);
  const variant = useContextMenuStore((state) => state.variant);

  const contextMenuRef = useRef(null);

  useOnClickOutside(contextMenuRef, () => setIsOpen(false));

  useEffect(() => {
    if (contextMenuRef.current) {
      contextMenuRef.current.style.left = point.x + "px";
      contextMenuRef.current.style.top = point.y + "px";
    }
  }, [point.x, point.y]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={contextMenuRef}
      className="absolute z-20 w-48 rounded border bg-white p-1 font-rubik text-sm shadow-lg"
    >
      {ContextMenuContent[variant]}
    </div>
  );
};

export default ContextMenu;
