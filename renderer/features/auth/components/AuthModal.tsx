import dynamic from "next/dynamic";
import useAuthStore from "../../../stores/authStore";
import AuthForm from "./AuthForm";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

const AuthModal = () => {
  const isOpen = useAuthStore((state) => state.isAuthModalOpen);
  const setIsOpen = useAuthStore((state) => state.setIsAuthModalOpen);
  return (
    <Modal open={isOpen} setOpen={setIsOpen}>
      <AuthForm />
    </Modal>
  );
};

export default AuthModal;
