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

      <div className="absolute top-0 right-0 m-2 rounded bg-gray-200 bg-opacity-80 p-2 backdrop-blur-md backdrop-filter ">
        <WindowOperationsIcons />
      </div>
    </div>
  );
};

export default WelcomeModal;
