import { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { BsFileEarmark, BsFolder } from "react-icons/bs";
import useRenameModalStore from "../../../stores/renameModalStore";
import useEditFile from "../../../hooks/useEditFile";
import { getFileName, getPathWithoutFilename } from "../../../utils/path";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

const RenameFileModal = () => {
  const isOpen = useRenameModalStore((state) => state.isOpen);
  const setIsOpen = useRenameModalStore((state) => state.setIsOpen);
  const pathToFile = useRenameModalStore((state) => state.pathToFile);
  const setPathToFile = useRenameModalStore((state) => state.setPathToFile);
  const fileType = useRenameModalStore((state) => state.fileType);

  const { renameFile } = useEditFile();

  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setFileName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    renameFile(pathToFile, `${getPathWithoutFilename(pathToFile)}/${fileName}`);

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
            <div> Rename {fileType === "file" ? "file" : "folder"}</div>
            <div className="text-xs font-thin text-gray-600">
              in {pathToFile}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            defaultValue={getFileName(pathToFile)}
            autofocus
            placeholder="Enter the name..."
            onChange={handleChange}
          />
          <Button className=" flex-1 whitespace-pre py-1">
            Rename {fileType === "file" ? "file" : "folder"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default RenameFileModal;
