import Image from "next/image";
import useFileStore from "../../../stores/fileStore";
import Tab from "./tab";

const Tabs = () => {
  const openedFiles = useFileStore((state) => state.openedFiles);
  const currentFile = useFileStore((state) => state.currentFile);
  return (
    <div className="bg-gray-300 flex w-full overflow-auto max-w-full">
      {openedFiles.map((openedFile, idx) => (
        <Tab
          key={idx}
          content={openedFile}
          active={openedFile === currentFile}
        />
      ))}
    </div>
  );
};

export default Tabs;
