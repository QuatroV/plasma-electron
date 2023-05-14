import { useSession } from "next-auth/react";
import { FiUser } from "react-icons/fi";

import Tooltip from "../../../components/Tooltip";
import useAuthStore from "../../../stores/authStore";

const AuthHeaderElement = () => {
  const { data: session, status } = useSession();

  const setIsAuthModalOpen = useAuthStore((state) => state.setIsAuthModalOpen);

  const setIsProfileModalOpen = useAuthStore(
    (state) => state.setIsProfileModalOpen,
  );

  if (session && status === "authenticated") {
    return (
      <Tooltip tooltip={<span>See profile</span>}>
        <div
          onClick={() => setIsProfileModalOpen(true)}
          className="mr-1 flex h-min cursor-pointer items-center justify-center gap-2 rounded p-1 outline-1 transition-all hover:bg-gray-300 active:scale-105 active:outline active:outline-gray-400"
        >
          <span className=" overflow-hidden text-ellipsis whitespace-pre font-bold">
            {session.user.name}
          </span>
          <FiUser className="flex-1" size={20} />
        </div>
      </Tooltip>
    );
  }

  return (
    <Tooltip tooltip={<span>Login</span>}>
      <div
        onClick={() => setIsAuthModalOpen(true)}
        className="mr-1 flex h-min w-10 cursor-pointer items-center justify-center rounded p-1 outline-1 transition-all hover:bg-gray-300 active:scale-105 active:outline active:outline-gray-400"
      >
        <FiUser size={20} />
      </div>
    </Tooltip>
  );
};

export default AuthHeaderElement;
