import Image from "next/image";
import useLoadFile from "../../../hooks/useLoadFile";
import useFileStore from "../../../stores/fileStore";
import Tab from "./Tab";

const Tabs = () => {
  const openedFiles = useFileStore((state) => state.openedFiles);
  const currentFile = useFileStore((state) => state.currentFile);
  const removeOpenedFile = useFileStore((state) => state.removeOpenedFile);
  const { openFile } = useLoadFile();

  const handleClose = (file) => {
    removeOpenedFile(file);
  };

  const handleClick = (e, file) => {
    openFile(e, file);
  };

  return (
    <div className="flex w-full max-w-full overflow-auto bg-gray-300">
      {openedFiles.map((openedFile, idx) => (
        <Tab
          key={idx}
          openedFile={openedFile}
          onClose={handleClose}
          onClick={handleClick}
          active={openedFile.name === currentFile}
        />
      ))}
    </div>
  );
};

export default Tabs;
