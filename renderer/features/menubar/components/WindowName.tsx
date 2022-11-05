import useFileStore from "../../../stores/fileStore";

const WindowName = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const projectName = useFileStore((state) => state.projectName);
  return (
    <div className="flex items-center">
      {currentFile && `${currentFile} -`} {projectName} - Plasma Project
    </div>
  );
};

export default WindowName;
