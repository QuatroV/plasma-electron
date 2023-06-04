import { VscDebugAlt } from "react-icons/vsc";

type Props = {
  onButtonClick: () => void;
};

const DebugSidebarPlaceholder = ({ onButtonClick }: Props) => {
  return (
    <div className="animate-slow-appear flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <VscDebugAlt className="text-gray-500" size={100} />
        <div className="mt-2 text-gray-500">Cannot find connected lesson!</div>
        <button
          onClick={onButtonClick}
          className="rounded-xl border border-gray-400 px-2 py-0.5 transition-all hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-500 hover:text-white active:scale-105 active:shadow"
        >
          Choose file to start debugging
        </button>
      </div>
    </div>
  );
};

export default DebugSidebarPlaceholder;
