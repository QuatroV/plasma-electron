import { AiOutlineCode } from "react-icons/ai";

export const OpenFilePlaceholder = () => {
  return (
    <div className="flex h-2/3 items-center justify-center ">
      <div className="flex flex-col items-center gap-1">
        <AiOutlineCode size={140} color="#d4d4d8" />
        <span className="font-light text-zinc-500">
          Open some file to see content here...
        </span>
        <span className="text-xs font-light text-zinc-500">
          You can do this by choosing file in the sidebar
        </span>
      </div>
    </div>
  );
};
