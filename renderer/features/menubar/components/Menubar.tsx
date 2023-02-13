import Image from "next/image";
import MenuElement from "./MenuElement";
import MenuFileElement from "./MenuFileElement";
import WindowOperationsIcons from "../../windowOperations/components/WindowOperationsIcons";
import WindowName from "./WindowName";
import MenuProjectElement from "./MenuProjectElement";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";

const MenuBar = () => {
  const isWelcomeModalOpen = useWelcomeModalStore((state) => state.isOpen);

  if (isWelcomeModalOpen) return null;

  return (
    <nav className="w-100 draggable sticky top-0 z-10 flex justify-between bg-gray-100 pr-2 text-sm">
      <div className="flex justify-center gap-2 p-1">
        <MenuFileElement />
        <MenuElement title="Edit" />
        <MenuProjectElement />
        <MenuElement title="Selection" />
        <MenuElement title="Terminal" />
      </div>
      <WindowName />
      <WindowOperationsIcons />
    </nav>
  );
};

export default MenuBar;
