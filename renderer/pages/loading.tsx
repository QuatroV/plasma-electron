import { NextPage } from "next";
import Logo from "../features/welcome/components/Logo";
import { ImSpinner9 as Spinner } from "react-icons/im";

const Loading: NextPage = () => {
  return (
    <>
      <div className="draggable bg-mesh-gradient absolute h-screen w-screen bg-gray-400 brightness-75"></div>
      <div className="flex h-screen flex-col items-center justify-center font-rubik">
        <Logo white className="  grow-0 shadow" />
        <Spinner size={25} className="z-10 mt-4 animate-spin text-white" />
      </div>
    </>
  );
};

export default Loading;
