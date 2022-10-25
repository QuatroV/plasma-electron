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
          className={`absolute z-10 bg-gray-100 pt-2 pb-2 mt-1 rounded flex flex-col gap-1 shadow`}
        >
          {options.map((el, idx) => (
            <div
              className="cursor-pointer hover:bg-white pl-2 pr-2 pt-1 pb-1"
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
