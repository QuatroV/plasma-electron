import { ipcRenderer } from "electron";
import useOpenDirectory from "../../../hooks/useOpenDirectory";
import useSaveFile from "../../../hooks/useSaveFile";
import useFileStore from "../../../stores/fileStore";
import useModalStore from "../../../stores/modalStore";
import MenuElement from "./MenuElement";

const MenuFileElement = () => {
  const { openDir } = useOpenDirectory();
  const { saveFile } = useSaveFile();
  const { setIsCreateFileModalOpen } = useModalStore();
  const setPathToCreateFile = useModalStore(
    (state) => state.setPathToCreateFile
  );
  const rootPath = useFileStore((state) => state.rootPath);
  const setCreateFileType = useModalStore((state) => state.setCreateFileType);

  const NewFileOption = () => {
    return (
      <div
        onClick={() => {
          setCreateFileType("file");
          setPathToCreateFile(rootPath);
          setIsCreateFileModalOpen(true);
        }}
      >
        New File
      </div>
    );
  };

  const NewFolderOption = () => {
    return (
      <div
        onClick={() => {
          setCreateFileType("directory");
          setPathToCreateFile(rootPath);
          setIsCreateFileModalOpen(true);
        }}
      >
        New Folder
      </div>
    );
  };

  const OpenDirectoryOption = () => {
    return <div onClick={openDir}>Open Directory</div>;
  };

  const OpenRecentOption = () => {
    return <div onClick={() => null}>Open Recent</div>;
  };

  const SaveFileOption = () => {
    return <div onClick={saveFile}>Save File</div>;
  };

  const ExitOption = () => {
    return <div onClick={() => ipcRenderer.invoke("quit-app")}>Exit</div>;
  };

  const options = [
    NewFileOption,
    NewFolderOption,
    "divider",
    OpenDirectoryOption,
    OpenRecentOption,
    "divider",
    SaveFileOption,
    "divider",
    ExitOption,
  ];

  return <MenuElement title="File" options={options} />;
};

export default MenuFileElement;
