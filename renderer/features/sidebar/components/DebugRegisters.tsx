import { useState } from "react";

const DebugRegisters = () => {
  const [valueForm, setValueForm] = useState<"bin" | "hex">("hex");
  return (
    <div>
      <div className="px-2 py-1 text-sm font-bold">Registers</div>
      <div className="px-2">
        <table className="w-full table-fixed  text-xs">
          <thead className="  text-xs uppercase text-gray-700 shadow dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className=" rounded-tl bg-gray-50 py-1 pl-4 text-start">
                Register
              </th>
              <th className=" flex flex-row items-center justify-between rounded-tr bg-gray-50 py-1 pl-4 text-start">
                <div>Value</div>
                <div
                  className=" mr-1 cursor-pointer rounded border border-gray-500 px-1 active:bg-gray-500 active:text-white"
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
          <tbody className="border border-gray-300">
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className="pl-4">EAX</td>
              <td className="pl-4">0x11</td>
            </tr>
            <tr className="cursor-pointer  border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EBX</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer  border-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className=" pl-4">ECX</td>
              <td className=" pl-4">0xFF</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300  bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EDX</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className=" pl-4">ESP</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EBP</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className=" pl-4">ESI</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">EDI</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className=" pl-4">EFLAGS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">CS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className=" pl-4">SS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">DS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className=" pl-4">ES</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer border-b border-solid border-gray-300 bg-gray-200 transition-all hover:bg-gray-300">
              <td className=" pl-4">FS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
            <tr className="cursor-pointer rounded-b border-solid border-gray-300 bg-gray-100 transition-all hover:bg-gray-300">
              <td className=" pl-4">GS</td>
              <td className=" pl-4">0x4F</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DebugRegisters;
