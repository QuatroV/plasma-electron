import { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useModalStore from "../../../stores/modalStore";
import useCreateFile from "../../../hooks/useCreateFile";
import { BsFileEarmark, BsFolder } from "react-icons/bs";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

const CreateFileModal = () => {
  const isCreateFileModalOpen = useModalStore(
    (state) => state.isCreateFileModalOpen
  );
  const setIsCreateFileModalOpen = useModalStore(
    (state) => state.setIsCreateFileModalOpen
  );
  const pathToCreateFile = useModalStore((state) => state.pathToCreateFile);
  const setPathToCreateFile = useModalStore(
    (state) => state.setPathToCreateFile
  );
  const createFileType = useModalStore((state) => state.createFileType);

  const { createFile, createFolder } = useCreateFile();

  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setFileName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (createFileType === "file") {
      createFile(pathToCreateFile, fileName);
    } else {
      createFolder(pathToCreateFile, fileName);
    }

    handleCloseModal(false);
  };

  const handleCloseModal = (val) => {
    setPathToCreateFile("");
    setIsCreateFileModalOpen(val);
  };

  return (
    <Modal open={isCreateFileModalOpen} setOpen={handleCloseModal}>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2 text-base font-black">
          <div className=" h-[40px] w-fit rounded-full bg-white p-1 drop-shadow">
            {createFileType === "file" ? (
              <BsFileEarmark className="p-1" size={32} />
            ) : (
              <BsFolder className="p-1" size={32} />
            )}
          </div>
          <div>
            <div>
              Create new {createFileType === "file" ? "file" : "folder"}
            </div>
            <div className="text-xs font-thin text-gray-600">
              in {pathToCreateFile}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            autofocus
            placeholder="Enter the name..."
            onChange={handleChange}
          />
          <Button className=" flex-1 whitespace-pre py-1">
            Create {createFileType === "file" ? "file" : "folder"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateFileModal;
