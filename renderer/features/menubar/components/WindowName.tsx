import useFileStore from "../../../stores/fileStore";

const WindowName = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const projectName = useFileStore((state) => state.projectName);
  return (
    <div className="flex items-center overflow-hidden text-ellipsis whitespace-nowrap font-rubik">
      {currentFile && `${currentFile.name} -`} {projectName} - Plasma
    </div>
  );
};

export default WindowName;
