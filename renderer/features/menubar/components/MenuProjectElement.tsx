import useOpenDirectory from "../../../hooks/useOpenDirectory";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import MenuElement from "./MenuElement";

const MenuProjectElement = () => {
  const setIsOpen = useWelcomeModalStore((state) => state.setIsOpen);
  const setStage = useWelcomeModalStore((state) => state.setStage);

  const CreateProjectOption = () => {
    return (
      <div
        onClick={() => {
          setIsOpen(true);
          setStage("createProject");
        }}
      >
        Create New Project
      </div>
    );
  };

  const { openDir } = useOpenDirectory(() => {
    setIsOpen(false);
  });

  const OpenProjectOption = () => {
    return <div onClick={openDir}>Open Project</div>;
  };

  const SaveProjectOption = () => {
    return <div>Save project</div>;
  };

  const options = [CreateProjectOption, OpenProjectOption, SaveProjectOption];

  return <MenuElement title="Project" options={options} />;
};

export default MenuProjectElement;
