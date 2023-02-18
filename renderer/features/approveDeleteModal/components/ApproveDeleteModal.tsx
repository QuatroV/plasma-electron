import dynamic from "next/dynamic";
import { BsFileEarmark, BsFolder } from "react-icons/bs";
import Button from "../../../components/Button";
import useApproveDeleteModalStore from "../../../stores/approveDeleteStore";
import useEditFile from "../../contextMenu/hooks/useEditFile";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

const ApproveDeleteModal = () => {
  const isOpen = useApproveDeleteModalStore((state) => state.isOpen);
  const setIsOpen = useApproveDeleteModalStore((state) => state.setIsOpen);
  const pathToFile = useApproveDeleteModalStore((state) => state.pathToFile);
  const setPathToFile = useApproveDeleteModalStore(
    (state) => state.setPathToFile
  );
  const fileType = useApproveDeleteModalStore((state) => state.fileType);

  const { deleteFile } = useEditFile();

  const handleDelete = (e) => {
    e.preventDefault();

    deleteFile(pathToFile);

    handleCloseModal(false);
  };

  const handleCloseModal = (val) => {
    setPathToFile("");
    setIsOpen(val);
  };

  return (
    <Modal open={isOpen} setOpen={handleCloseModal}>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2 text-base font-black">
          <div className=" h-[40px] w-fit rounded-full bg-white p-1 drop-shadow">
            {fileType === "file" ? (
              <BsFileEarmark className="p-1" size={32} />
            ) : (
              <BsFolder className="p-1" size={32} />
            )}
          </div>
          <div>
            <div> Delete {fileType === "file" ? "file" : "folder"}</div>
            <div className="text-xs font-thin text-gray-600">
              in {pathToFile}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleDelete}
            className=" flex-1 whitespace-pre py-1 active:outline-red-500 "
          >
            Delete {fileType === "file" ? "file" : "folder"}
          </Button>
          <Button
            className=" flex-1 whitespace-pre py-1"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ApproveDeleteModal;
