import { IoMdClose } from "react-icons/io";
import { Tab } from "../../../hooks/tabsStore";
import { ImTree } from "react-icons/im";

interface TabProps {
  tabInfo: Tab;
  onClose: (file) => void;
  onClick: (e, file) => void;
}

const Tab = ({ tabInfo, onClose, onClick }: TabProps) => {
  const { active, name, type } = tabInfo;
  return (
    <div
      className={`non-draggable group relative flex cursor-pointer flex-row items-center gap-2 border-t border-gray-300 pt-2 pl-2 pr-2 pb-1 text-sm last:rounded-tr-xl ${
        active
          ? "after:invert-round-active bg-white font-semibold after:-right-2.5"
          : "border-l border-r border-gray-300 bg-gray-200 after:-right-3 first:border-l-0 hover:bg-gradient-to-b hover:from-gray-200 hover:via-gray-100 hover:to-gray-100"
      }  after:absolute after:bottom-0 last:after:h-3 last:after:w-4 `}
      onClick={(e) => onClick(e, tabInfo)}
    >
      {type === "AST" ? <ImTree /> : null}
      <div
        className={`flex flex-col items-center after:h-0.5 after:rounded after:bg-cyan-500 ${
          active && "after:w-full"
        }`}
      >
        <div>{name}</div>
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
