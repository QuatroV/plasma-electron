import { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useModalStore from "../../../stores/modalStore";
import useCreateFile from "../../menubar/hooks/useCreateFile";

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

  const { createFile } = useCreateFile();

  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setFileName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createFile(pathToCreateFile, fileName);

    handleCloseModal(false);
  };

  const handleCloseModal = (val) => {
    setPathToCreateFile("");
    setIsCreateFileModalOpen(val);
  };

  return (
    <Modal open={isCreateFileModalOpen} setOpen={handleCloseModal}>
      <div className="flex flex-col gap-1 text-sm">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input placeholder="Enter the file name..." onChange={handleChange} />
          <Button className=" flex-1 whitespace-pre py-1">Create file</Button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateFileModal;
