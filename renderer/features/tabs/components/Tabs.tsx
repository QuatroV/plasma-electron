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
    <div className="scrollbar flex w-full max-w-full overflow-auto whitespace-nowrap bg-gradient-to-b from-gray-100 to-gray-200 font-rubik">
      {openedFiles.map((openedFile, idx) => (
        <Tab
          key={idx}
          openedFile={openedFile}
          onClose={handleClose}
          onClick={handleClick}
          active={openedFile.name === currentFile.name}
        />
      ))}
    </div>
  );
};

export default Tabs;
