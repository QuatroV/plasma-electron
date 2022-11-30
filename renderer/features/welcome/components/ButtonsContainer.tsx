import useWelcomeModalStore from "../stores/modalStore";
import MainButton from "./MainButton";
import OpenExistingProjectButton from "./OpenExistingProjectButton";

const ButtonsContainer = () => {
  const setStage = useWelcomeModalStore((state) => state.setStage);
  return (
    <div className="flex w-full animate-slow-appear flex-row gap-3">
      <div className="w-2/3">
        <div className="mb-3">
          <div className="text-3xl font-black">Welcome to Plasma</div>
          <div className=" text-gray-700">
            Create new project or open an existing one
          </div>
        </div>

        <div>
          <MainButton
            title="Create new project"
            imgSrc="/welcome/add_circle_FILL0_wght400_GRAD0_opsz48.svg"
            onClick={() => setStage("createProject")}
          />
          <OpenExistingProjectButton
            title="Open existing project"
            imgSrc="/welcome/file_open_black_24dp.svg"
          />
          <MainButton
            title="Education mode"
            imgSrc="/welcome/school_FILL0_wght400_GRAD0_opsz48.svg"
            onClick={() => null}
          />
        </div>
      </div>

      <div className="w-1/3 border-l-2 border-dotted border-gray-100 pl-2 ">
        <div className="mb-2 text-xl font-light text-gray-500">
          Recent projects
        </div>
        <ul className=" flex-2 w-full">
          <li
            className={`flex w-full cursor-pointer flex-row items-center gap-2 rounded text-gray-900 hover:underline active:font-bold`}
          >
            HelloWorld.asm
          </li>
          <li
            className={`flex w-full cursor-pointer flex-row items-center gap-2 rounded text-gray-900 hover:underline active:font-bold`}
          >
            Lab2.asm
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonsContainer;
