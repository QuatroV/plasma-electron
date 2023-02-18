import useContextMenuStore from "../../../stores/contextMenuStore";
import ContextMenuItem from "./ContextMenuItem";
import useModalStore from "../../../stores/modalStore";
import useRenameModalStore from "../../../stores/renameModalStore";
import useApproveDeleteModalStore from "../../../stores/approveDeleteStore";

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

  const setRenameFileType = useRenameModalStore((state) => state.setFileType);
  const pathToRenameFile = useRenameModalStore((state) => state.setPathToFile);
  const setIsRenameFileModalOpen = useRenameModalStore(
    (state) => state.setIsOpen
  );

  const handleRenameFolder = () => {
    setRenameFileType("directory");
    pathToRenameFile(file.path);
    setIsRenameFileModalOpen(true);
  };

  const setDeletedFileType = useApproveDeleteModalStore(
    (state) => state.setFileType
  );
  const pathToDeletedFile = useApproveDeleteModalStore(
    (state) => state.setPathToFile
  );
  const setIsDeleteApproveModalOpen = useApproveDeleteModalStore(
    (state) => state.setIsOpen
  );

  const handleDeleteFolder = () => {
    setDeletedFileType("directory");
    pathToDeletedFile(file.path);
    setIsDeleteApproveModalOpen(true);
  };

  return (
    <>
      <h6 className="px-2 py-0.5 text-xs text-gray-500">{file.name}</h6>
      <ContextMenuItem onClick={handleCreateFile}>New File</ContextMenuItem>
      <ContextMenuItem onClick={handleCreateFolder}>New Folder</ContextMenuItem>
      <hr className="m-1" />
      <ContextMenuItem onClick={handleRenameFolder}>
        Rename Folder
      </ContextMenuItem>
      <ContextMenuItem onClick={handleDeleteFolder}>
        Delete Folder
      </ContextMenuItem>
    </>
  );
};

export default ContextMenuExplorerDirectory;
