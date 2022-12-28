import useFileStore from "../../../stores/fileStore";
import { FaGitAlt } from "react-icons/fa";

const GitExplorer = () => {
  const projectName = useFileStore((state) => state.projectName);
  return (
    <>
      <div className=" bg-gradient flex flex-row items-center justify-between bg-gray-300 py-1 px-2 text-sm font-semibold uppercase">
        {projectName}
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <FaGitAlt size={100} color="rgb(107 114 128)" />
          <span className="text-gray-500">No Git repo found!</span>
          <button className="rounded-xl border border-gray-400 px-2 py-0.5 transition-all hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-500 hover:text-white active:scale-105 active:shadow">
            Create one
          </button>
        </div>
      </div>
    </>
  );
};

export default GitExplorer;
