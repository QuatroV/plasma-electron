import useOpenDirectory from "../../../hooks/useOpenDirectory";
import useSaveFile from "../../../hooks/useSaveFile";
import useFileStore from "../../../stores/fileStore";
import useModalStore from "../../../stores/modalStore";
import useCreateFile from "../hooks/useCreateFile";
import MenuElement from "./MenuElement";

const MenuFileElement = () => {
  const { openDir } = useOpenDirectory();
  const { saveFile } = useSaveFile();
  const { setIsCreateFileModalOpen } = useModalStore();
  const setPathToCreateFile = useModalStore(
    (state) => state.setPathToCreateFile
  );
  const rootPath = useFileStore((state) => state.rootPath);

  const NewFileOption = () => {
    return (
      <div
        onClick={() => {
          setPathToCreateFile(rootPath);
          setIsCreateFileModalOpen(true);
        }}
      >
        New File
      </div>
    );
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
