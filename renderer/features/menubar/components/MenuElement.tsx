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
        className={`cursor-pointer hover:bg-white p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all non-draggable ${
          dropdownOpen ? "bg-white rounded-t-lg shadow-lg" : "rounded-lg"
        }`}
      >
        {title}
      </div>
    </Dropdown>
  );
};

export default MenuElement;
