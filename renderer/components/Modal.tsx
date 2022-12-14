import { ReactNode, ReactPortal, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const Modal = ({ children, open, setOpen }: ModalProps): ReactPortal => {
  return createPortal(
    <div
      className={`fixed top-0 z-20 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60 bg-acrylic backdrop-blur-sm backdrop-filter transition-all ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className=" rounded-xl bg-gray-200 bg-opacity-60 bg-gradient-to-tr  p-4 shadow backdrop-blur"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
