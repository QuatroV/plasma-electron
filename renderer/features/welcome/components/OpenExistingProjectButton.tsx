import useOpenDirectory from "../../../hooks/useOpenDirectory";
import useWelcomeModalStore from "../stores/modalStore";
import MainButton from "./MainButton";

interface OpenExistingProjectButtonProps {
  title: string;
  imgSrc: string;
}

const OpenExistingProjectButton = (props: OpenExistingProjectButtonProps) => {
  const setIsOpen = useWelcomeModalStore((state) => state.setIsOpen);
  const { openDir } = useOpenDirectory(() => setIsOpen(false));

  const mainButtonProps = {
    ...props,
    onClick: openDir,
  };

  return <MainButton {...mainButtonProps} />;
};

export default OpenExistingProjectButton;
