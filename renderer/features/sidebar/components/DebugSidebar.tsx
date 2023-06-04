import useExecutionStore from "../../../stores/executionStore";
import useFileStore from "../../../stores/fileStore";
import DebugControls from "../../debug/components/DebugControls";
import DebugFlags from "../../debug/components/DebugFlags";
import DebugRegisters from "../../debug/components/DebugRegisters";
import DebugSidebarPlaceholder from "../../debug/components/DebugSidebarPlaceholder";
import useDebug from "../../debug/hooks/useDebug";

const DebugSidebar = () => {
  const projectName = useFileStore((state) => state.projectName);

  const isDebugging = useExecutionStore((state) => state.isDebugging);

  const { startDebug } = useDebug();

  return (
    <div className="h-full">
      <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 px-2 py-1 text-sm font-semibold uppercase">
        {projectName}{" "}
        {isDebugging && (
          <div className="rounded-full border border-gray-400 px-2 py-0 text-xs capitalize">
            Debug in progress...
          </div>
        )}
      </div>
      <div className="animate-slow-appear scrollbar h-full overflow-y-auto">
        {isDebugging ? (
          <>
            <DebugControls />
            <DebugRegisters />
            <DebugFlags />
          </>
        ) : (
          <DebugSidebarPlaceholder onButtonClick={() => startDebug()} />
        )}
      </div>
    </div>
  );
};

export default DebugSidebar;
