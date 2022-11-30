import Image from "next/image";
import { ipcRenderer } from "electron";

const WindowOperationsIcons = () => {
  return (
    <div className="non-draggable flex min-w-max items-center">
      <Image
        onClick={() => ipcRenderer.invoke("min-window")}
        src="/menubar/minimize_FILL0_wght400_GRAD0_opsz48.svg"
        height="24"
        width="24"
        alt=""
        className="cursor-pointer rounded hover:bg-gray-400"
      />
      <Image
        onClick={() => ipcRenderer.invoke("max-window")}
        src="/menubar/open_in_full_FILL0_wght400_GRAD0_opsz48.svg"
        height="24"
        width="24"
        alt=""
        className="cursor-pointer rounded hover:bg-gray-400"
      />
      <Image
        onClick={() => ipcRenderer.invoke("quit-app")}
        src="/editor/close_FILL0_wght400_GRAD0_opsz48.svg"
        height="24"
        width="24"
        alt=""
        className="cursor-pointer rounded hover:bg-gray-400"
      />
    </div>
  );
};

export default WindowOperationsIcons;
