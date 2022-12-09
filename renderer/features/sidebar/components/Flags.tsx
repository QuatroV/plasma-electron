import Image from "next/image";
import { useState } from "react";

const Flags = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="">
      <div
        onClick={() => setCollapsed((prevState) => !prevState)}
        className=" group flex cursor-pointer justify-between border-t border-gray-400 bg-gray-300 py-1 px-2 text-sm font-semibold uppercase outline-offset-[-3px] outline-gray-400 transition-all hover:outline active:bg-gray-400"
      >
        Flags
        <Image
          alt="Expand"
          src="/sidebar/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
          className={`${
            collapsed ? "-rotate-90 group-hover:translate-x-1" : " "
          } transition-all`}
          height="20"
          width="20"
        />
      </div>
      <div
        className={`${
          collapsed ? "h-0" : " h-28"
        } flex flex-col gap-2 bg-gray-400 transition-all`}
      >
        <div className="px-2 pt-2">
          <div className="grid grid-cols-9 rounded text-sm">
            <div className="flex items-center justify-center rounded-tl bg-gray-200">
              CF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              PF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              AF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              ZF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              SF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              TF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              IF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              DF
            </div>
            <div className="flex items-center justify-center rounded-tr bg-gray-200">
              OF
            </div>
            <div className="flex items-center justify-center rounded-bl border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center rounded-br border-t border-gray-400 bg-gray-200">
              1
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="grid grid-cols-9 rounded text-sm">
            <div className="flex items-center justify-center rounded-tl bg-gray-200">
              CF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              PF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              AF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              ZF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              SF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              TF
            </div>
            <div className="flex items-center justify-center bg-gray-200">
              IF
            </div>
            <div className="flex items-center justify-center bg-gray-300">
              DF
            </div>
            <div className="flex items-center justify-center rounded-tr bg-gray-200">
              OF
            </div>
            <div className="flex items-center justify-center rounded-bl border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              0
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-200">
              1
            </div>
            <div className="flex items-center justify-center border-t border-gray-400 bg-gray-300">
              1
            </div>
            <div className="flex items-center justify-center rounded-br border-t border-gray-400 bg-gray-200">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flags;
