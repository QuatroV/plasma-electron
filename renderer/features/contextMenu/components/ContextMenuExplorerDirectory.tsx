import useContextMenuStore from "../../../stores/contextMenuStore";
import useCreateFile from "../../../hooks/useCreateFile";
import ContextMenuItem from "./ContextMenuItem";
import useModalStore from "../../../stores/modalStore";

const ContextMenuExplorerDirectory = () => {
  const { file } = useContextMenuStore((state) => state.contextData);
  const setPathToCreateFile = useModalStore(
    (state) => state.setPathToCreateFile
  );
  const setIsCreateFileModalOpen = useModalStore(
    (state) => state.setIsCreateFileModalOpen
  );
  const setCreateFileType = useModalStore((state) => state.setCreateFileType);

  const handleCreateFile = () => {
    setCreateFileType("file");
    setPathToCreateFile(file.path);
    setIsCreateFileModalOpen(true);
  };

  const handleCreateFolder = () => {
    setCreateFileType("directory");
    setPathToCreateFile(file.path);
    setIsCreateFileModalOpen(true);
  };

  return (
    <>
      <h6 className="px-2 py-0.5 text-xs text-gray-500">{file.name}</h6>
      <ContextMenuItem onClick={handleCreateFile}>Create file</ContextMenuItem>
      <ContextMenuItem onClick={handleCreateFolder}>
        Create folder
      </ContextMenuItem>
    </>
  );
};

export default ContextMenuExplorerDirectory;
