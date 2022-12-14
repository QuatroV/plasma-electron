import { forwardRef } from "react";

interface DropdownProps {
  children: React.ReactNode;
  options: (() => JSX.Element)[];
  dropdownOpen: boolean;
  onClick?: () => void;
  onContextMenu?: (e: any) => void;
}

const Dropdown = (
  { children, options, dropdownOpen, onClick, onContextMenu }: DropdownProps,
  ref
) => {
  return (
    <div className="flex flex-col justify-center" ref={ref}>
      <div onClick={onClick} onContextMenu={onContextMenu}>
        {children}
      </div>
      {dropdownOpen && (
        <div
          className={`absolute top-3/4 z-10 flex flex-col gap-1 rounded-b rounded-tr bg-white p-1 font-rubik shadow-lg`}
        >
          {options.map((el, idx) => (
            <div
              className=" cursor-pointer rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 active:shadow-inner"
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
