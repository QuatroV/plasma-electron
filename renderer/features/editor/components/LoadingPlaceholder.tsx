import { AiOutlineCode } from "react-icons/ai";

export const LoadingPlaceholder = () => {
  return (
    <div className="flex h-2/3 items-center justify-center ">
      <div className="flex flex-col items-center ">
        <AiOutlineCode size={140} color="#d4d4d8" />
        <span className="font-light text-zinc-500">Opening file...</span>
      </div>
    </div>
  );
};
