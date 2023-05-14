import useFileStore from "../../../stores/fileStore";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import WindowOperationsIcons from "../../windowOperations/components/WindowOperationsIcons";
import ButtonsContainer from "./ButtonsContainer";
import CreateAnswerContainer from "./CreateAnswerContainer";
import CreateProjectContainer from "./CreateProjectContainer";
import Logo from "./Logo";

const STAGES = {
  welcome: <ButtonsContainer />,
  createProject: <CreateProjectContainer />,
  createAnswer: <CreateAnswerContainer />,
};

const WelcomeModal = () => {
  const isOpen = useWelcomeModalStore((state) => state.isOpen);
  const stage = useWelcomeModalStore((state) => state.stage);
  const rootPath = useFileStore((state) => state.rootPath);

  return (
    <div
      className={`fixed z-20 flex h-screen w-screen items-center justify-center ${
        rootPath
          ? "bg-black bg-opacity-60 "
          : "bg-mesh-gradient bg-contain bg-center"
      }  backdrop-blur-sm ${!isOpen && "hidden"}`}
    >
      <div>
        <div>
          <div className="flex flex-row items-center justify-start gap-4 pl-4">
            <Logo />
          </div>

          <div
            className={` font-rubik m-4 flex flex-col gap-4 rounded-xl p-4 shadow backdrop-blur backdrop-filter transition-all md:w-[600px] md:flex-row ${
              rootPath ? "bg-gray-200 bg-opacity-80" : "bg-glass "
            }`}
          >
            {STAGES[stage]}
          </div>
        </div>
      </div>

      <div className="draggable absolute top-0 z-10 flex h-10 w-screen justify-between bg-gray-100 text-sm">
        <div className="flex w-full items-center justify-between rounded bg-gray-200  p-2">
          <span className="font-rubik ml-2 text-lg font-extrabold text-gray-700">
            Plasma IDE
          </span>
          <WindowOperationsIcons />
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
