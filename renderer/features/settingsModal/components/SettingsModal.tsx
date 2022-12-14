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
      <div className=" min-w-[600px]">
        <div className="mb-2 flex flex-row gap-2">
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
            <div className="flex flex-row gap-3">
              <div
                className={` cursor-pointer text-3xl transition-all ${
                  tab === "general" ? "font-black" : ""
                }`}
                onClick={() => setTab("general")}
              >
                General
              </div>
              <div
                className={`cursor-pointer text-3xl transition-all ${
                  tab === "view" ? "font-black" : ""
                }`}
                onClick={() => setTab("view")}
              >
                View
              </div>
              <div
                className={`cursor-pointer text-3xl transition-all ${
                  tab === "build" ? "font-black" : ""
                }`}
                onClick={() => setTab("build")}
              >
                Build
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
