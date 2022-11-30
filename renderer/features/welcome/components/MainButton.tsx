import Image from "next/image";

interface MainButtonProps {
  title: string;
  imgSrc: string;
  onClick: () => void;
}

const MainButton = ({ title, imgSrc, onClick }: MainButtonProps) => {
  return (
    <div
      className="flex flex-1 flex-row items-center gap-2 rounded-xl p-2 transition-all hover:scale-105 hover:cursor-pointer hover:bg-white hover:drop-shadow active:outline active:outline-2 active:outline-emerald-400"
      onClick={onClick}
    >
      <Image src={imgSrc} alt="Icon" height="24" width="24" />
      <span className="whitespace-pre">{title}</span>
    </div>
  );
};

export default MainButton;
