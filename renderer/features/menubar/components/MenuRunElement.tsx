import Image from "next/image";
import useRunFile from "../hooks/useRunFile";

const MenuRunElement = () => {
  const { runFile } = useRunFile();
  return (
    <div
      onClick={runFile}
      className="non-draggable flex cursor-pointer items-center rounded-lg bg-white p-1 font-rubik outline-2 transition-all hover:outline hover:outline-emerald-400 active:scale-105"
    >
      Run
    </div>
  );
};

export default MenuRunElement;
