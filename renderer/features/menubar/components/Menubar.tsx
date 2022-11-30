import Image from "next/image";
import Logo from "./Logo";
import MenuElement from "./MenuElement";
import MenuFileElement from "./MenuFileElement";
import MenuRunElement from "./MenuRunElement";
import WindowOperationsIcons from "../../windowOperations/components/WindowOperationsIcons";
import WindowName from "./WindowName";
import MenuProjectElement from "./MenuProjectElement";

const MenuBar = () => {
  return (
    <nav className="w-100 draggable sticky top-0 z-10 flex justify-between bg-gray-100 pr-2">
      <div className="flex gap-2 p-1">
        <Logo />
        <MenuFileElement />
        <MenuElement title="Edit" />
        <MenuProjectElement />
        <MenuElement title="Selection" />
        <MenuElement title="Terminal" />
        <MenuRunElement />
      </div>
      <WindowName />
      <WindowOperationsIcons />
    </nav>
  );
};

export default MenuBar;
