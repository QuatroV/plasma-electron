import { ReactNode } from "react";
import { BiArrowBack } from "react-icons/bi";

type Props = {
  onBack: () => void;
  title: ReactNode;
};

const CreateAnswerHeader = ({ onBack, title }: Props) => {
  return (
    <div className="mb-2 flex flex-row gap-2">
      <div className=" h-[40px] w-fit cursor-pointer rounded-full bg-white p-1 transition-all hover:scale-105 hover:bg-white hover:drop-shadow active:outline active:outline-2 active:outline-emerald-400">
        <BiArrowBack size={32} onClick={onBack} />
      </div>
      <div className="animate-slow-appear">
        <div>Creating new project...</div>
        <div className="text-3xl font-black ">{title}</div>
      </div>
    </div>
  );
};

export default CreateAnswerHeader;
