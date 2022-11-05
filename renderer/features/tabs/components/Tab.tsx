import Image from "next/image";

interface TabProps {
  content: string;
  active: boolean;
}

const Tab = ({ content, active }: TabProps) => {
  return (
    <div
      className={` p-1 border-l-2 cursor-pointer text-sm  flex flex-row items-center gap-2 ${
        active ? "shadow bg-white font-semibold" : "bg-gray-200 border-gray-300"
      }`}
    >
      {content}
      {active && (
        <Image
          src="/editor/close_FILL0_wght400_GRAD0_opsz48.svg"
          height="20"
          width="20"
          alt=""
          className="hover:bg-gray-400 rounded"
        />
      )}
    </div>
  );
};

export default Tab;
