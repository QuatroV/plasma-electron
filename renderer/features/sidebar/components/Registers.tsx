import Image from "next/image";
import { useState } from "react";

const Registers = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [valueForm, setValueForm] = useState<"bin" | "hex">("hex");
  return (
    <div className="mt-auto">
      <div
        onClick={() => setCollapsed((prevState) => !prevState)}
        className=" group flex cursor-pointer justify-between bg-gray-300 py-1 px-2 text-sm font-semibold uppercase outline-offset-[-3px] outline-gray-400 transition-all hover:outline active:bg-gray-400"
      >
        Registers
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
      <div className={`${collapsed ? "h-0" : " h-[19.4rem]"} transition-all`}>
        <table className="w-full table-fixed border-x-2 border-gray-300 bg-gray-100 text-xs">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 shadow dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="py-1 pl-4 text-start">Register</th>
              <th className="flex flex-row items-center justify-between py-1 pl-4 text-start">
                <div>Value</div>
                <div
                  className=" cursor-pointer rounded border border-gray-500 px-1 active:bg-gray-500 active:text-white"
                  onClick={() =>
                    setValueForm((prevState) =>
                      prevState === "hex" ? "bin" : "hex"
                    )
                  }
                >
                  {valueForm === "hex" ? "hex" : "bin"}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className="pl-4">EAX</td>
              <td className="pl-4">0x11</td>
            </tr>
            <tr className="cursor-pointer  border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EBX</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer  border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className=" pl-4">ECX</td>
              <td className=" pl-4">0xFF</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EDX</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className=" pl-4">ESP</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EBP</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className=" pl-4">ESI</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EDI</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className=" pl-4">EFLAGS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">CS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className=" pl-4">SS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">DS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className=" pl-4">ES</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">FS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300">
              <td className=" pl-4">GS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registers;
