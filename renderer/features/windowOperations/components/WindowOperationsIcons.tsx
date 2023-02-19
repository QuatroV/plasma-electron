import { useState, useEffect } from "react";
import Image from "next/image";
import { ipcRenderer } from "electron";
import useModalStore from "../../../stores/modalStore";

import { FiMaximize, FiMinimize } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import { VscGear } from "react-icons/vsc";

const WindowOperationsIcons = () => {
  const setOpen = useModalStore((state) => state.setIsOpen);

  const [windowMaximized, setWindowMaximized] = useState(false);

  useEffect(() => {
    ipcRenderer.on("window:state-changed", (evt, data) => {
      setWindowMaximized(data.maximized);
    });
  }, []);

  return (
    <>
      <div className="non-draggable flex items-center">
        <div
          onClick={() => setOpen(true)}
          className="mr-1 flex h-min w-10 cursor-pointer items-center justify-center rounded p-1 outline-1 transition-all active:scale-105 active:bg-gray-400 active:outline active:outline-gray-400"
        >
          <VscGear size={20} />
        </div>
        <div
          onClick={() => ipcRenderer.invoke("window:min")}
          className="flex h-min w-10 cursor-pointer items-center justify-center rounded-l p-1 outline-2 transition-all active:scale-105 active:bg-gray-300 active:shadow-inner active:outline active:outline-emerald-400"
        >
          <MdMinimize size={20} />
        </div>
        <div
          onClick={() => ipcRenderer.invoke("window:max-or-unmax")}
          className="flex h-min w-10 cursor-pointer items-center justify-center p-1 outline-2 transition-all active:scale-105 active:bg-gray-300 active:shadow-inner active:outline active:outline-yellow-400"
        >
          {windowMaximized ? (
            <FiMinimize className="cursor-pointer" size={20} />
          ) : (
            <FiMaximize className="cursor-pointer" size={20} />
          )}
        </div>
        <div
          onClick={() => ipcRenderer.invoke("app:quit-app")}
          className="flex h-min w-10 cursor-pointer items-center justify-center rounded-r p-1 outline-2 transition-all active:scale-105 active:bg-gray-300 active:shadow-inner active:outline active:outline-red-400"
        >
          <IoMdClose className="cursor-pointer" size={20} />
        </div>
      </div>
    </>
  );
};

export default WindowOperationsIcons;
