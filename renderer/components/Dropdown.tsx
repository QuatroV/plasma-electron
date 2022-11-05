import { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

interface DropdownProps {
  children: React.ReactNode;
  options: (() => JSX.Element)[];
}

const Dropdown = ({ children, options }: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  return (
    <div ref={dropdownListRef} className="">
      <div onClick={() => setDropdownOpen(true)}>{children}</div>
      {dropdownOpen && (
        <div
          className={`absolute z-10 bg-white p-1 mt-1 rounded flex flex-col gap-1 shadow-lg`}
        >
          {options.map((el, idx) => (
            <div
              className=" rounded cursor-pointer hover:bg-gray-200 pl-2 pr-2 pt-1 pb-1 active:shadow-inner"
              key={idx}
            >
              {el()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
