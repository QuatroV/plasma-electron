import useFileStore from "../../../stores/fileStore";
import DebugFlags from "./DebugFlags";
import DebugRegisters from "./DebugRegisters";

const DebugSidebar = () => {
  const projectName = useFileStore((state) => state.projectName);
  return (
    <div>
      <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 py-1 px-2 text-sm font-semibold uppercase">
        {projectName}
      </div>
      <DebugRegisters />
      <DebugFlags />
    </div>
  );
};

export default DebugSidebar;
