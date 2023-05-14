import { MouseEventHandler } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

import clsxm from "../utils/clsxm";

type Props = {
  className: string;
  invalid?: boolean;
  multiline?: boolean;
  searchable?: boolean;
  onClear: MouseEventHandler<SVGElement>;
} & any;

const Input = ({
  className = "",
  invalid,
  multiline,
  searchable,
  onClear,
  ...other
}: Props) => {
  if (searchable) {
    return (
      <div className="relative w-full">
        {other?.value ? (
          <MdOutlineClear
            size="16"
            onClick={onClear}
            className="absolute right-2 top-[6px] cursor-pointer"
          />
        ) : (
          <AiOutlineSearch size="16" className="absolute right-2 top-[6px]" />
        )}
        <input
          className={clsxm(
            "w-full rounded p-1",
            invalid && "outline outline-2 outline-red-500 ",
            className,
          )}
          {...other}
        />
      </div>
    );
  }

  return multiline ? (
    <textarea
      rows={1}
      className={clsxm(
        "scrollbar w-full rounded p-1",
        invalid && "outline outline-2 outline-red-500 ",
        className,
      )}
      {...other}
    />
  ) : (
    <input
      className={clsxm(
        "w-full rounded p-1",
        invalid && "outline outline-2 outline-red-500 ",
        className,
      )}
      {...other}
    />
  );
};

export default Input;
