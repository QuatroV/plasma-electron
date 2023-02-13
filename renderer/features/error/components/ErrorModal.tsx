import { ipcRenderer } from "electron";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

const saveToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

const ErrorModal = () => {
  const [open, setOpen] = useState(false);

  const [errorString, setErrorString] = useState("");

  useEffect(() => {
    ipcRenderer.on("main-process-error", (evt, message) => {
      console.error(message);
      setErrorString(message);
      setOpen(true);
    });
  }, []);

  return (
    <Modal open={open} setOpen={() => setOpen(false)}>
      <div className="flex max-w-[800px] flex-col items-start gap-2">
        <h1 className="text-3xl font-black">
          Oh no! Looks like something went wrong 😭
        </h1>
        <div>Here is full message: </div>
        <div className=" rounded border-2 border-red-500 bg-gray-200 p-2 shadow">
          <code>{errorString}</code>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button onClick={() => saveToClipboard(errorString)}>
            Copy error to clipboard
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
