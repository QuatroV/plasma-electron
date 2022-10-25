import Image from "next/image";
import { ipcRenderer } from "electron";

const WindowOperationsIcons = () => {
  return (
    <div className="flex items-center non-draggable">
      <Image
        onClick={() => ipcRenderer.invoke("quit-app")}
        src="/editor/close_FILL0_wght400_GRAD0_opsz48.svg"
        height="24"
        width="24"
        alt=""
        className="hover:bg-gray-400 rounded"
      />
    </div>
  );
};

export default WindowOperationsIcons;
