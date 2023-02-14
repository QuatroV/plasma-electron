import useFileStore from "../../../stores/fileStore";

const WindowName = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const projectName = useFileStore((state) => state.projectName);
  const projectAssemblyLanguage = useFileStore(
    (state) => state.projectAssemblyLanguage
  );
  return (
    <>
      <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap font-rubik">
        <div>
          {currentFile && `${currentFile.name} -`} {projectName} - Plasma
        </div>
        {projectAssemblyLanguage && (
          <div
            title="Assembly language assumed by the information in project file "
            className="rounded-lg border bg-gray-200 px-1 text-xs"
          >
            {projectAssemblyLanguage}
          </div>
        )}
      </div>
    </>
  );
};

export default WindowName;
