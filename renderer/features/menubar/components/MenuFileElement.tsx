import useOpenDirectory from "../../../hooks/useOpenDirectory";
import useSaveFile from "../../../hooks/useSaveFile";
import MenuElement from "./MenuElement";

const MenuFileElement = () => {
  const { openDir } = useOpenDirectory();
  const { saveFile } = useSaveFile();

  const NewFileOption = () => {
    return <div>New File</div>;
  };

  const OpenDirectoryOption = () => {
    return <div onClick={openDir}>Open Directory</div>;
  };

  const SaveFileOption = () => {
    return <div onClick={saveFile}>Save File</div>;
  };

  const options = [NewFileOption, OpenDirectoryOption, SaveFileOption];

  return <MenuElement title="File" options={options} />;
};

export default MenuFileElement;
