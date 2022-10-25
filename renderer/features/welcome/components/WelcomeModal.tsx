import useWelcomeModalStore from "../stores/modalStore";
import ButtonsContainer from "./ButtonsContainer";

const WelcomeModal = () => {
  const isOpen = useWelcomeModalStore((state) => state.isOpen);
  return (
    <div
      className={`flex justify-center items-center h-screen z-20 fixed w-screen bg-slate-900/50 backdrop-blur-sm ${
        !isOpen && "hidden"
      }`}
    >
      <div>
        <div className="">
          <h1 className="text-white font-extrabold text-6xl flex justify-center">
            PL
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              ASM
            </span>
            A IDE
          </h1>
          <ButtonsContainer />
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
