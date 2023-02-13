import clsxm from "../utils/clsxm";

const Input = ({ className, ...other }) => {
  return (
    <input className={clsxm("w-full rounded p-1", className)} {...other} />
  );
};

export default Input;
