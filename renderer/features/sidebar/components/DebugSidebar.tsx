import useFileStore from "../../../stores/fileStore";
import DebugFlags from "./DebugFlags";
import DebugRegisters from "./DebugRegisters";

const DebugSidebar = () => {
  const projectName = useFileStore((state) => state.projectName);
  return (
    <div>
      <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 px-2 py-1 text-sm font-semibold uppercase">
        {projectName}
      </div>
      <div className="animate-slow-appear">
        <DebugRegisters />
        <DebugFlags />
      </div>
    </div>
  );
};

export default DebugSidebar;
