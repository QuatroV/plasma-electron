import Image from "next/image";
import { ipcRenderer } from "electron";
import useModalStore from "../../../stores/modalStore";

const WindowOperationsIcons = () => {
  const setOpen = useModalStore((state) => state.setIsOpen);
  return (
    <>
      <div className="non-draggable flex items-center">
        <div
          onClick={() => setOpen(true)}
          className="mr-1 flex h-min w-10 cursor-pointer items-center justify-center rounded p-1 outline-1 hover:bg-gray-300 active:scale-105 active:outline active:outline-gray-400"
        >
          <Image
            src="/menubar/settings_FILL0_wght400_GRAD0_opsz48.svg"
            height="20"
            width="20"
            alt=""
          />
        </div>
        <div
          onClick={() => ipcRenderer.invoke("min-window")}
          className="flex h-min w-10 cursor-pointer items-center justify-center rounded-l p-1 outline-1 hover:bg-gray-300 active:scale-105 active:outline active:outline-emerald-400"
        >
          <Image
            src="/menubar/minimize_FILL0_wght400_GRAD0_opsz48.svg"
            height="20"
            width="20"
            alt=""
          />
        </div>
        <div
          onClick={() => ipcRenderer.invoke("max-window")}
          className="flex h-min w-10 cursor-pointer items-center justify-center p-1 outline-1 hover:bg-gray-300 active:scale-105 active:outline active:outline-yellow-400"
        >
          <Image
            src="/menubar/open_in_full_FILL0_wght400_GRAD0_opsz48.svg"
            height="20"
            width="20"
            alt=""
          />
        </div>
        <div
          onClick={() => ipcRenderer.invoke("quit-app")}
          className="flex h-min w-10 cursor-pointer items-center justify-center rounded-r p-1 outline-1 hover:bg-gray-300 active:scale-105 active:outline active:outline-red-400"
        >
          <Image
            src="/editor/close_FILL0_wght400_GRAD0_opsz48.svg"
            height="20"
            width="20"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WindowOperationsIcons;
