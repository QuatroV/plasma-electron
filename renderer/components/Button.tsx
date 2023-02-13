const Button = (props) => {
  return (
    <button
      className="float-right rounded  bg-white p-2 font-medium transition-all hover:shadow-lg active:outline active:outline-emerald-400"
      {...props}
    ></button>
  );
};

export default Button;
