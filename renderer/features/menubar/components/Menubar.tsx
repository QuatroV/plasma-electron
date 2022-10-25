import Image from "next/image";
import Logo from "./Logo";
import MenuElement from "./MenuElement";
import MenuFileElement from "./MenuFileElement";
import MenuRunElement from "./MenuRunElement";
import WindowOperationsIcons from "./WindowOperationsIcons";

const MenuBar = () => {
  return (
    <nav className="flex w-100   bg-gray-200 sticky top-0 z-10 draggable justify-between ">
      <div className="flex gap-2 p-1">
        <Logo />
        <MenuFileElement />
        <MenuElement title="Edit" />
        <MenuElement title="Selection" />
        <MenuElement title="Terminal" />
        <MenuRunElement />
      </div>
      <WindowOperationsIcons />
    </nav>
  );
};

export default MenuBar;
