import { useRef, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

interface MenuElementProps {
  title: string;
  options?: (() => JSX.Element)[];
}

const MenuElement = ({ title, options }: MenuElementProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  return (
    <Dropdown
      options={options || []}
      ref={dropdownListRef}
      onClick={() => setDropdownOpen(true)}
      dropdownOpen={dropdownOpen}
    >
      <div
        className={`non-draggable cursor-pointer p-1 font-rubik outline-1 transition-all hover:bg-white active:scale-105 active:outline active:outline-emerald-400 ${
          dropdownOpen ? "rounded-t-lg bg-white shadow-lg" : "rounded-lg"
        }`}
      >
        {title}
      </div>
    </Dropdown>
  );
};

export default MenuElement;
