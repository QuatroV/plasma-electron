import dynamic from "next/dynamic";
import WindowOperationsIcons from "../../windowOperations/components/WindowOperationsIcons";
import useWelcomeModalStore from "../stores/modalStore";
import ButtonsContainer from "./ButtonsContainer";
import Logo from "./Logo";

const WelcomeModal = () => {
  const isOpen = useWelcomeModalStore((state) => state.isOpen);
  return (
    <div
      className={`flex justify-center items-center h-screen z-20 fixed w-screen bg-[url('/welcome/low-poly-grid-haikei.png')] bg-contain bg-center backdrop-blur-sm ${
        !isOpen && "hidden"
      }`}
    >
      <div>
        <div>
          <div className="flex justify-center flex-row items-center">
            <Logo />
            <h1 className="text-white font-extrabold text-6xl flex justify-center">
              PL
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                ASM
              </span>
              A
            </h1>
          </div>

          <ButtonsContainer />
        </div>
      </div>

      <div className="absolute top-0 right-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md m-2 p-2 rounded ">
        <WindowOperationsIcons />
      </div>
    </div>
  );
};

export default WelcomeModal;
