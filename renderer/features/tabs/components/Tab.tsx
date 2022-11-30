import Image from "next/image";
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
      className={`group flex cursor-pointer flex-row items-start gap-2 p-2 text-sm ${
        active
          ? "bg-white font-semibold "
          : " -right-0 bg-gray-200 outline outline-1 outline-gray-300 "
      }`}
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
        <Image
          onClick={() => onClose(openedFile)}
          src="/editor/close_FILL0_wght400_GRAD0_opsz48.svg"
          height="20"
          width="20"
          alt=""
          className="rounded hover:bg-gray-400"
        />
      </div>
    </div>
  );
};

export default Tab;
