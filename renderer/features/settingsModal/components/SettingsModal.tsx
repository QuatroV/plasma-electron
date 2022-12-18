import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import useModalStore from "../../../stores/modalStore";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

type Tab = "general" | "view" | "build";

const SettingsModal = () => {
  const open = useModalStore((state) => state.isOpen);
  const setOpen = useModalStore((state) => state.setIsOpen);

  const props = { open, setOpen };

  const [tab, setTab] = useState<Tab>("general");

  return (
    <Modal {...props}>
      <div className=" min-h-[400px] min-w-[600px]">
        <div className="mb-3 flex flex-row gap-2">
          <div className="h-[40px] w-fit cursor-pointer rounded-full bg-white p-1 transition-all hover:scale-105 hover:bg-white hover:drop-shadow active:outline active:outline-2 active:outline-emerald-400">
            <Image
              src="/welcome/arrow_back_FILL0_wght400_GRAD0_opsz48.svg"
              alt="Icon"
              height="32"
              width="32"
              onClick={() => setOpen(false)}
            />
          </div>
          <div>
            <div>Settings</div>
            <div className="flex flex-row gap-4">
              <div
                className={` cursor-pointer text-3xl transition-all ${
                  tab === "general" ? "font-black" : "text-gray-600"
                }`}
                onClick={() => setTab("general")}
              >
                General
              </div>
              <div
                className={`cursor-pointer text-3xl transition-all ${
                  tab === "view" ? "font-black" : "text-gray-600"
                }`}
                onClick={() => setTab("view")}
              >
                View
              </div>
              <div
                className={`cursor-pointer text-3xl transition-all ${
                  tab === "build" ? "font-black" : "text-gray-600"
                }`}
                onClick={() => setTab("build")}
              >
                Build
              </div>
            </div>
          </div>
        </div>

        <div className="ml-12">
          <div className="flex items-center gap-2">
            <div>Theme:</div>{" "}
            <div className="flex items-center gap-1 rounded-full border-2 border-gray-200 bg-gray-300 shadow-inner">
              <div className="flex cursor-pointer items-center rounded-full bg-gray-200 p-1">
                <Image
                  width="24"
                  height="24"
                  alt="Dark"
                  src={
                    "/settingsModal/light_mode_FILL0_wght400_GRAD0_opsz48.svg"
                  }
                />
              </div>

              <div className="flex cursor-pointer items-center rounded-full p-1">
                <Image
                  width="24"
                  height="24"
                  alt="Dark"
                  src={
                    "/settingsModal/dark_mode_FILL0_wght400_GRAD0_opsz48.svg"
                  }
                />
              </div>

              <div className="flex cursor-pointer items-center rounded-full p-1">
                <Image
                  width="24"
                  height="24"
                  alt="Dark"
                  src={
                    "/settingsModal/desktop_windows_FILL0_wght400_GRAD0_opsz48.svg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
