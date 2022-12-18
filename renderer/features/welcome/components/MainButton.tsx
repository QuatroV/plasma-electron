import Image from "next/image";

interface MainButtonProps {
  title: string;
  imgSrc: string;
  onClick: () => void;
}

const MainButton = ({ title, imgSrc, onClick }: MainButtonProps) => {
  return (
    <div
      className=" group flex flex-1 flex-row items-center gap-2 rounded-xl from-white to-transparent p-2 transition-all hover:cursor-pointer hover:bg-gradient-to-r  active:outline-1 active:outline-emerald-400"
      onClick={onClick}
    >
      <Image src={imgSrc} alt="Icon" height="24" width="24" />
      <span className="whitespace-pre">{title}</span>
      <span className=" inline-block w-0 overflow-hidden transition-all group-hover:w-5 group-active:translate-x-1">
        →
      </span>
    </div>
  );
};

export default MainButton;
