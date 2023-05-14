import { useEffect, useState } from "react";
import Image from "next/image";
import { ipcRenderer } from "electron";
import { FiMaximize, FiMinimize, FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import { VscGear } from "react-icons/vsc";

import Tooltip from "../../../components/Tooltip";
import useAuthStore from "../../../stores/authStore";
import useModalStore from "../../../stores/modalStore";
import AuthHeaderElement from "./AuthHeaderElement";

const WindowOperationsIcons = () => {
  const setOpen = useModalStore((state) => state.setIsOpen);
  const setOpenAuthModal = useAuthStore((state) => state.setIsAuthModalOpen);

  const [windowMaximized, setWindowMaximized] = useState(false);

  useEffect(() => {
    ipcRenderer.on("window:state-changed", (evt, data) => {
      setWindowMaximized(data.maximized);
    });
  }, []);

  return (
    <>
      <div className="non-draggable flex items-center">
        <AuthHeaderElement />
        <Tooltip tooltip={<span>Settings</span>}>
          <div
            onClick={() => setOpen(true)}
            className="mr-1 flex h-min w-10 cursor-pointer items-center justify-center rounded p-1 outline-1 transition-all hover:bg-gray-300 active:scale-105 active:outline active:outline-gray-400"
          >
            <VscGear size={20} />
          </div>
        </Tooltip>
        <Tooltip tooltip={<span>Collapse window</span>}>
          <div
            onClick={() => ipcRenderer.invoke("window:min")}
            className="flex h-min w-10 cursor-pointer items-center justify-center rounded-l p-1 outline-2 transition-all hover:bg-gray-300 active:scale-105 active:shadow-inner active:outline active:outline-emerald-400"
          >
            <MdMinimize size={20} />
          </div>
        </Tooltip>

        <Tooltip
          tooltip={
            <span>
              {windowMaximized ? "Minimize window" : "Maximize window"}
            </span>
          }
        >
          <div
            onClick={() => ipcRenderer.invoke("window:max-or-unmax")}
            className="flex h-min w-10 cursor-pointer items-center justify-center p-1 outline-2 transition-all hover:bg-gray-300 active:scale-105 active:shadow-inner active:outline active:outline-yellow-400"
          >
            {windowMaximized ? (
              <FiMinimize className="cursor-pointer" size={20} />
            ) : (
              <FiMaximize className="cursor-pointer" size={20} />
            )}
          </div>
        </Tooltip>

        <Tooltip tooltip={<span>Close window</span>}>
          <div
            onClick={() => ipcRenderer.invoke("app:quit-app")}
            className="flex h-min w-10 cursor-pointer items-center justify-center rounded-r p-1 outline-2 transition-all hover:bg-gray-300 active:scale-105 active:shadow-inner active:outline active:outline-red-400"
          >
            <IoMdClose className="cursor-pointer" size={20} />
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default WindowOperationsIcons;
