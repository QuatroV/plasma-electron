import clsxm from "../utils/clsxm";

type Props = {
  className: string;
  invalid?: boolean;
  multiline?: boolean;
} & any;

const Input = ({ className = "", invalid, multiline, ...other }: Props) => {
  return multiline ? (
    <textarea
      rows={1}
      className={clsxm(
        "scrollbar w-full rounded p-1",
        invalid && "outline outline-2 outline-red-500 ",
        className
      )}
      {...other}
    />
  ) : (
    <input
      className={clsxm(
        "w-full rounded p-1",
        invalid && "outline outline-2 outline-red-500 ",
        className
      )}
      {...other}
    />
  );
};

export default Input;
