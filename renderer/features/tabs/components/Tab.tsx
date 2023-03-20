import { IoMdClose } from "react-icons/io";
import { Tab } from "../../../hooks/tabsStore";
import { ImTree } from "react-icons/im";

import { useDrag, useDrop } from "react-dnd";
import useContextMenuStore from "../../../stores/contextMenuStore";

interface TabProps {
  tabInfo: Tab;
  onClose: (file) => void;
  onClick: (e, file) => void;
  last: boolean;
  reorderTabs: (firstId: string, secondId: string) => void;
}

const Tab = ({ tabInfo, onClose, onClick, last, reorderTabs }: TabProps) => {
  const { active, name, type } = tabInfo;

  const [{ isDragging }, dragRef] = useDrag({
    type: "tabItem",
    item: { tab: tabInfo },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: "tabItem",
    drop: (item: { tab: Tab }) => {
      reorderTabs(item.tab.id, tabInfo.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const setContextMenuOpen = useContextMenuStore((state) => state.setIsOpen);
  const setPoint = useContextMenuStore((state) => state.setPoint);
  const setVariant = useContextMenuStore((state) => state.setVariant);
  const setContextData = useContextMenuStore((state) => state.setContextData);

  const handleContextMenu = (e) => {
    setVariant("tab");
    setContextData({ tab: tabInfo });
    setPoint({ x: e.clientX, y: e.clientY });
    setContextMenuOpen(true);
  };

  return (
    <div
      className={`non-draggable group relative flex cursor-pointer flex-row items-center gap-2 border-t border-gray-300 pt-2 pl-2 pr-2 pb-1 text-sm last:rounded-tr-xl ${
        active
          ? "after:invert-round-active bg-white font-semibold after:-right-2.5"
          : "border-l border-r border-gray-300 bg-gray-200 after:-right-3 first:border-l-0 hover:bg-gradient-to-b hover:from-gray-200 hover:via-gray-100 hover:to-gray-100"
      }  after:absolute after:bottom-0 last:after:h-3 last:after:w-4 ${
        isDragging && "opacity-50"
      }`}
      onClick={(e) => onClick(e, tabInfo)}
      ref={(el) => {
        dragRef(el);
        dropRef(el);
      }}
      onContextMenu={handleContextMenu}
    >
      {type === "AST" ? <ImTree /> : null}
      <div
        className={`flex flex-col items-center after:h-0.5 after:rounded after:bg-cyan-500 ${
          active && "after:w-full"
        }`}
      >
        {name}
      </div>
      <div
        className={`${active ? "visible" : "invisible group-hover:visible"}`}
      >
        <IoMdClose
          className="cursor-pointer rounded hover:bg-gray-300 active:bg-gray-400"
          onClick={() => onClose(tabInfo)}
          size={20}
        />
      </div>
    </div>
  );
};

export default Tab;
