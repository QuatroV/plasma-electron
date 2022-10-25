import useOpenDirectory from "../../../hooks/useOpenDirectory";
import MenuElement from "./MenuElement";

const MenuFileElement = () => {
  const { openDir } = useOpenDirectory();

  const NewFileOption = () => {
    return <div>New File</div>;
  };

  const OpenDirectoryOption = () => {
    return <div onClick={openDir}>Open Directory</div>;
  };

  const SaveFileOption = () => {
    return <div>Save FIle</div>;
  };

  const options = [NewFileOption, OpenDirectoryOption, SaveFileOption];

  return <MenuElement title="File" options={options} />;
};

export default MenuFileElement;
