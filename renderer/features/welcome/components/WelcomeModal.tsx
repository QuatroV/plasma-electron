import WindowOperationsIcons from "../../windowOperations/components/WindowOperationsIcons";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import ButtonsContainer from "./ButtonsContainer";
import CreateProjectContainer from "./CreateProjectContainer";
import Logo from "./Logo";
import useFileStore from "../../../stores/fileStore";

const STAGES = {
  welcome: <ButtonsContainer />,
  createProject: <CreateProjectContainer />,
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
            className={` m-4 flex flex-col gap-4 rounded-xl p-4 font-rubik shadow backdrop-blur backdrop-filter transition-all md:w-[600px] md:flex-row ${
              rootPath ? "bg-gray-200 bg-opacity-80" : "bg-glass "
            }`}
          >
            {STAGES[stage]}
          </div>
        </div>
      </div>

      <div className="draggable absolute top-0 z-10 flex h-10 w-screen justify-between bg-gray-100 text-sm">
        <div className="flex w-full items-center justify-between rounded bg-gray-200  p-2">
          <span className="ml-2 font-rubik text-lg font-extrabold text-gray-700">
            Plasma IDE
          </span>
          <WindowOperationsIcons />
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
