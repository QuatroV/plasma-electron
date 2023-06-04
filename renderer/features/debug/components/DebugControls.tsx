import { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { IoIosArrowForward, IoIosExit } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { TbPlayerStop } from "react-icons/tb";
import {
  VscDebugStart,
  VscDebugStepInto,
  VscDebugStepOver,
} from "react-icons/vsc";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Tooltip from "../../../components/Tooltip";
import clsxm from "../../../utils/clsxm";
import useDebug from "../hooks/useDebug";
import useDebugStore from "../stores/debugStore";
import { transformRegistersResponse } from "../utils";

const DebugControls = () => {
  const { runDbgCmd } = useDebug();

  const addBreakpoint = useDebugStore((state) => state.addBreakpoint);
  const removeBreakpoint = useDebugStore((state) => state.removeBreakpoint);
  const clearBreakpoints = useDebugStore((state) => state.clearBreakpoints);
  const breakpoints = useDebugStore((state) => state.breakpoints);

  const [breakpointNameAdd, setBreakpointNameAdd] = useState("");
  const [breakpointNameRemove, setBreakpointNameRemove] = useState("");
  const [breakpointListCollapsed, setBreakpointListCollapsed] = useState(true);

  const handleAddBreakpoint = () => {
    addBreakpoint(breakpointNameAdd);
    runDbgCmd(`break ${breakpointNameAdd}`, (data) => console.log({ data }));
  };

  const handleRemoveBreakpoint = () => {
    removeBreakpoint(breakpointNameRemove);
    runDbgCmd(`clear ${breakpointNameRemove}`, (data) => console.log({ data }));
  };

  const setRegisters = useDebugStore((state) => state.setRegisters);
  const setFlags = useDebugStore((state) => state.setFlags);

  const handleUpdateInfo = () => {
    runDbgCmd("info registers", (arg) => {
      const transformedResp = transformRegistersResponse(arg.data);

      console.log({ transformedResp });

      setRegisters(transformedResp.registers);
      setFlags(transformedResp.flags);

      console.log({ transformedResp });
    });
  };

  return (
    <div className="mt-2">
      <div className="mx-2 flex w-min items-center gap-2 rounded-md border bg-white p-1 font-bold">
        <Tooltip tooltip="Continue">
          <div
            onClick={() => runDbgCmd("run", () => null)}
            className="cursor-pointer rounded-md p-1 hover:bg-gray-100 active:shadow-inner"
          >
            <VscDebugStart />
          </div>
        </Tooltip>
        <Tooltip tooltip="Step Over">
          <div
            onClick={() => runDbgCmd("nexti", () => null)}
            className="cursor-pointer rounded-md p-1 hover:bg-gray-100 active:shadow-inner"
          >
            <VscDebugStepOver />
          </div>
        </Tooltip>
        <Tooltip tooltip="Step In">
          <div
            onClick={() => runDbgCmd("stepi", () => null)}
            className="cursor-pointer rounded-md p-1 hover:bg-gray-100 active:shadow-inner"
          >
            <VscDebugStepInto />
          </div>
        </Tooltip>
        <Tooltip tooltip="Update info">
          <div
            onClick={handleUpdateInfo}
            className="cursor-pointer rounded-md p-1 hover:bg-gray-100 active:shadow-inner"
          >
            <HiRefresh />
          </div>
        </Tooltip>
        <Tooltip tooltip="Stop" onClick={() => runDbgCmd("kill", () => null)}>
          <div className="cursor-pointer rounded-md p-1 hover:bg-gray-100 active:shadow-inner">
            <TbPlayerStop />
          </div>
        </Tooltip>
        <Tooltip tooltip="Exit" onClick={() => runDbgCmd("quit", () => null)}>
          <div className="cursor-pointer rounded-md p-1 hover:bg-gray-100 active:shadow-inner">
            <IoIosExit />
          </div>
        </Tooltip>
      </div>

      <div className="mt-2">
        <div className=" px-2 text-sm font-bold">Add breakpoint:</div>
        <div className="mx-2 flex items-stretch gap-2 rounded-md border p-1 font-bold">
          <Input
            value={breakpointNameAdd}
            onChange={(e) => setBreakpointNameAdd(e.target.value)}
            className="py-1 text-sm font-normal "
            placeholder="Line number or id..."
          />
          <Button
            onClick={handleAddBreakpoint}
            className="flex items-center px-2 py-1 text-sm active:outline-1"
          >
            Add
          </Button>
        </div>
        <div className="mx-2 flex items-stretch gap-2 rounded-md border p-1 font-bold">
          <Input
            value={breakpointNameRemove}
            onChange={(e) => setBreakpointNameRemove(e.target.value)}
            className="py-1 text-sm font-normal "
            placeholder="Line number or id..."
          />
          <Button
            onClick={handleRemoveBreakpoint}
            className="flex items-center px-2 py-1 text-sm active:outline-1"
          >
            Delete
          </Button>
        </div>
        <div className="mx-3 mt-1 flex">
          <Button
            onClick={clearBreakpoints}
            className="flex w-full items-center gap-2 px-2 py-1 text-sm active:outline-1"
          >
            <MdOutlineClear size={20} /> Clear all breakpoints
          </Button>
        </div>
        <div
          className="mx-3 mt-2  rounded bg-white p-1 text-sm font-semibold"
          onClick={() => setBreakpointListCollapsed((prev) => !prev)}
        >
          <div className="flex cursor-pointer items-center justify-between">
            Breakpoints list:
            <IoIosArrowForward
              className={clsxm(
                breakpointListCollapsed ? "rotate-90" : "-rotate-90",
                "transition-all",
              )}
            />
          </div>

          {!breakpointListCollapsed && (
            <div className="mt-1 text-xs font-normal">
              {breakpoints.map((breakpoint) => (
                <div>{breakpoint}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DebugControls;
