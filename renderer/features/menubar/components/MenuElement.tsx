import Dropdown from "../../../components/Dropdown";

interface MenuElementProps {
  title: string;
  options?: (() => JSX.Element)[];
}

const Option = () => {
  return <div>Some Option</div>;
};

const MenuElement = ({ title, options }: MenuElementProps) => {
  return (
    <Dropdown options={options || []}>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all non-draggable">
        {title}
      </div>
    </Dropdown>
  );
};

export default MenuElement;
