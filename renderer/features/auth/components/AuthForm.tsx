import { useState } from "react";
import { FiUser } from "react-icons/fi";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const forms = {
  login: <LoginForm />,
  registration: <RegistrationForm />,
};

const AuthForm = () => {
  const [tab, setTab] = useState<"login" | "registration">("login");
  return (
    <div className="flex h-64 w-80 flex-col">
      <div>
        <div className="flex items-center gap-2 text-lg font-bold uppercase">
          <FiUser size={40} /> Auth
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={` cursor-pointer text-xl transition-all ${
              tab === "login" ? "font-black" : "text-gray-600"
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </div>
          <div
            className={`cursor-pointer text-xl transition-all ${
              tab === "registration" ? "font-black" : "text-gray-600"
            }`}
            onClick={() => setTab("registration")}
          >
            Register
          </div>
        </div>
      </div>

      {forms[tab]}
    </div>
  );
};

export default AuthForm;
