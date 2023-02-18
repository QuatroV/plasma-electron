import useApproveDeleteModalStore from "../../../stores/approveDeleteStore";
import useContextMenuStore from "../../../stores/contextMenuStore";
import useRenameModalStore from "../../../stores/renameModalStore";
import ContextMenuItem from "./ContextMenuItem";

const ContextMenuExplorerFile = () => {
  const { file } = useContextMenuStore((state) => state.contextData);

  const setRenameFileType = useRenameModalStore((state) => state.setFileType);
  const pathToRenameFile = useRenameModalStore((state) => state.setPathToFile);
  const setIsRenameFileModalOpen = useRenameModalStore(
    (state) => state.setIsOpen
  );

  const handleRenameFile = () => {
    setRenameFileType("file");
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

  const handleDeleteFile = () => {
    setDeletedFileType("file");
    pathToDeletedFile(file.path);
    setIsDeleteApproveModalOpen(true);
  };

  return (
    <>
      <h6 className="px-2 py-0.5 text-xs text-gray-500">{file.name}</h6>
      <ContextMenuItem onClick={handleRenameFile}>Rename File</ContextMenuItem>
      <ContextMenuItem onClick={handleDeleteFile}>Delete File</ContextMenuItem>
    </>
  );
};

export default ContextMenuExplorerFile;
