import Image from "next/image";
import { ipcRenderer } from "electron";

const WindowOperationsIcons = () => {
  return (
    <div className="flex items-center non-draggable">
      <Image
        onClick={() => ipcRenderer.invoke("min-window")}
        src="/menubar/minimize_FILL0_wght400_GRAD0_opsz48.svg"
        height="24"
        width="24"
        alt=""
        className="hover:bg-gray-400 rounded cursor-pointer"
      />
      <Image
        onClick={() => ipcRenderer.invoke("max-window")}
        src="/menubar/open_in_full_FILL0_wght400_GRAD0_opsz48.svg"
        height="24"
        width="24"
        alt=""
        className="hover:bg-gray-400 rounded cursor-pointer"
      />
      <Image
        onClick={() => ipcRenderer.invoke("quit-app")}
        src="/editor/close_FILL0_wght400_GRAD0_opsz48.svg"
        height="24"
        width="24"
        alt=""
        className="hover:bg-gray-400 rounded cursor-pointer"
      />
    </div>
  );
};

export default WindowOperationsIcons;
