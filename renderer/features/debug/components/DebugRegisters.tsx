import { useState } from "react";

import clsxm from "../../../utils/clsxm";
import useDebugStore from "../stores/debugStore";

const REGISTERS = [
  "EAX",
  "EBX",
  "ECX",
  "EDX",
  "ESI",
  "EDI",
  "ESP",
  "EBP",
  "CS",
  "SS",
  "DS",
  "ES",
  "FS",
  "GS",
  "EIP",
];

const DebugRegisters = () => {
  const registers = useDebugStore((state) => state.registers);

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
              <th className="  flex-row items-center justify-between rounded-tr bg-gray-50 py-1 pl-4 text-start">
                <div>Hex</div>
              </th>
              <th className="  flex-row items-center justify-between rounded-tr bg-gray-50 py-1 pl-4 text-start">
                <div>Info</div>
              </th>
            </tr>
          </thead>
          <tbody className="border border-gray-300">
            {REGISTERS.map((register, idx) => {
              const registerValue = registers[register.toLowerCase()];
              return (
                <tr
                  className={clsxm(
                    idx % 2 === 0 ? "bg-gray-200" : "bg-gray-100",
                    "cursor-pointer border-b border-solid border-gray-300 transition-all hover:bg-gray-300",
                  )}
                >
                  <td className="pl-4">{register}</td>
                  <td className="pl-4">{registerValue?.hexValue}</td>
                  <td className="pl-4">{registerValue?.info}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DebugRegisters;
