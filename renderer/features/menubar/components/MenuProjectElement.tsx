import useOpenDirectory from "../../../hooks/useOpenDirectory";
import useWelcomeModalStore from "../../../stores/modalStore";
import useSaveFile from "../hooks/useSaveFile";
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
        Create new project
      </div>
    );
  };

  const { openDir } = useOpenDirectory(() => {
    setIsOpen(false);
  });

  const OpenProjectOption = () => {
    return <div onClick={openDir}>Open project</div>;
  };

  const options = [CreateProjectOption, OpenProjectOption];

  return <MenuElement title="Project" options={options} />;
};

export default MenuProjectElement;
