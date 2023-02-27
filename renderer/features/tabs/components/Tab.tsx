import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import useFileStore, {
  FileInfoWithoutNesting,
} from "../../../stores/fileStore";

interface TabProps {
  openedFile: FileInfoWithoutNesting;
  active: boolean;
  onClose: (file: FileInfoWithoutNesting) => void;
  onClick: (e, file: FileInfoWithoutNesting) => void;
}

const Tab = ({ openedFile, active, onClose, onClick }: TabProps) => {
  return (
    <div
      className={`non-draggable group relative flex cursor-pointer flex-row items-start gap-2 border-t border-gray-300 pt-2 pl-2 pr-2 pb-1 text-sm last:rounded-tr-xl ${
        active
          ? "after:invert-round-active bg-white font-semibold after:-right-2.5"
          : "border-l border-r border-gray-300 bg-gray-200 after:-right-3 first:border-l-0 hover:bg-gradient-to-b hover:from-gray-200 hover:via-gray-100 hover:to-gray-100"
      }  after:absolute after:bottom-0 last:after:h-3 last:after:w-4 `}
      onClick={(e) => onClick(e, openedFile)}
    >
      <div
        className={`flex flex-col items-center after:h-0.5 after:rounded after:bg-cyan-500 ${
          active && "after:w-full"
        }`}
      >
        {openedFile.name}
      </div>
      <div
        className={`${active ? "visible" : "invisible group-hover:visible"}`}
      >
        <IoMdClose
          className="cursor-pointer rounded hover:bg-gray-300 active:bg-gray-400"
          onClick={() => onClose(openedFile)}
          size={20}
        />
      </div>
    </div>
  );
};

export default Tab;
