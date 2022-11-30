import Image from "next/image";
import useRunFile from "../hooks/useRunFile";

const MenuRunElement = () => {
  const { runFile } = useRunFile();
  return (
    <div
      onClick={runFile}
      className="flex items-center cursor-pointer bg-white rounded-lg p-1 hover:outline-emerald-400 hover:outline outline-2 active:scale-105 transition-all non-draggable"
    >
      Run{" "}
      <Image
        src="/menubar/play_arrow_FILL0_wght400_GRAD0_opsz48.svg"
        alt="Icon"
        height="24"
        width="24"
      />
    </div>
  );
};

export default MenuRunElement;
