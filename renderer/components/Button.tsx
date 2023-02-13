import clsxm from "../utils/clsxm";

const Button = ({ className, ...other }) => {
  return (
    <button
      className={clsxm(
        "float-right rounded bg-white p-2 font-medium transition-all hover:shadow-lg active:outline active:outline-emerald-400",
        className
      )}
      {...other}
    ></button>
  );
};

export default Button;
