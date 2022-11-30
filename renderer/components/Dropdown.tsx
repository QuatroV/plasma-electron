import { useState, useRef, forwardRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

interface DropdownProps {
  children: React.ReactNode;
  options: (() => JSX.Element)[];
  dropdownOpen: boolean;
  onClick: () => void;
}

const Dropdown = (
  { children, options, dropdownOpen, onClick }: DropdownProps,
  ref
) => {
  return (
    <div ref={ref}>
      <div onClick={onClick}>{children}</div>
      {dropdownOpen && (
        <div
          className={`absolute z-10 bg-white p-1 rounded-b flex flex-col gap-1 shadow-lg`}
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

export default forwardRef(Dropdown);
