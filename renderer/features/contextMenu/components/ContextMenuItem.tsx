const ContextMenuItem = (props) => {
  return (
    <div
      className="cursor-pointer whitespace-pre rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 active:shadow-inner"
      {...props}
    />
  );
};

export default ContextMenuItem;
