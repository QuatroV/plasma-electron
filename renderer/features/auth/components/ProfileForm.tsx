import { signOut, useSession } from "next-auth/react";
import { FiUser } from "react-icons/fi";

import Button from "../../../components/Button";
import useAuthStore from "../../../stores/authStore";

const ProfileForm = () => {
  const { data: session } = useSession();

  const setIsProfileModalOpen = useAuthStore(
    (state) => state.setIsProfileModalOpen,
  );

  const handleLogOut = () => {
    signOut({ redirect: false });
    setIsProfileModalOpen(false);
  };

  return (
    <div className="flex w-60 flex-col">
      <div>
        <div className="flex items-center gap-2">
          <FiUser size={40} />
          <div>
            <div className="text-lg font-bold">{session?.user.name}</div>
            <div className="text-xs text-gray-500">{session?.user.email}</div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className={`text-xl transition-all`}>Info</div>
        </div>
      </div>
      <Button className="mt-auto" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};

export default ProfileForm;
