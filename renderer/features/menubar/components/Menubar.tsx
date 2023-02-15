import Image from "next/image";
import MenuElement from "./MenuElement";
import MenuFileElement from "./MenuFileElement";
import MenuRunElement from "./MenuRunElement";
import WindowOperationsIcons from "../../windowOperations/components/WindowOperationsIcons";
import WindowName from "./WindowName";
import MenuProjectElement from "./MenuProjectElement";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import MenuBuildElement from "./MenuBuildElement";

const MenuBar = () => {
  const isWelcomeModalOpen = useWelcomeModalStore((state) => state.isOpen);

  if (isWelcomeModalOpen) return null;

  return (
    <nav className="w-100 draggable sticky top-0 z-10 flex justify-between bg-gray-100 pr-2 text-sm">
      <div className="flex items-center justify-center gap-1 p-1">
        <MenuFileElement />
        <MenuProjectElement />
        <MenuBuildElement />
        <MenuRunElement title="Run program" />
      </div>
      <WindowName />
      <WindowOperationsIcons />
    </nav>
  );
};

export default MenuBar;
