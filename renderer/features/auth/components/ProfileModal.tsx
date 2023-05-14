import dynamic from "next/dynamic";

import useAuthStore from "../../../stores/authStore";
import ProfileForm from "./ProfileForm";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

const ProfileModal = () => {
  const isOpen = useAuthStore((state) => state.isProfileModalOpen);
  const setIsOpen = useAuthStore((state) => state.setIsProfileModalOpen);

  return (
    <Modal open={isOpen} setOpen={setIsOpen}>
      <ProfileForm />
    </Modal>
  );
};

export default ProfileModal;
