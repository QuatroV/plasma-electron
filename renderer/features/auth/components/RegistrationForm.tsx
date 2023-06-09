import { useRef, useState } from "react";
import { signIn } from "next-auth/react";

import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import clsxm from "../../../utils/clsxm";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false,
      name: name,
      surname: surname,
      email: email,
      password: password,
      isNewUser: true,
    });

    if (response && response.error) {
      setError(response.error);
    }
  };

  const comparePasswords = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [role, setRole] = useState<"STUDENT" | "ADMIN" | "TEACHER">("STUDENT");

  const setStudentOption = () => (
    <div
      onClick={() => {
        setRole("STUDENT");
        setDropdownOpen(false);
      }}
    >
      Student
    </div>
  );

  const setTeacherOption = () => (
    <div
      onClick={() => {
        setRole("TEACHER");
        setDropdownOpen(false);
      }}
    >
      Teacher
    </div>
  );

  return (
    <form
      className="relative flex flex-1 flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <div className="mb-4 mt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">Name:</label>
          <Input
            type="name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            className="w-44 border border-gray-500 bg-gray-200"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">Surname:</label>
          <Input
            type="name"
            value={surname}
            onChange={(e: any) => setSurname(e.target.value)}
            className="w-44 border border-gray-500 bg-gray-200"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">E-mail:</label>
          <Input
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            className="w-44 border border-gray-500 bg-gray-200"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">Password:</label>
          <Input
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className="w-44 border border-gray-500 bg-gray-200"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">Password again:</label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
            onBlur={comparePasswords}
            className="w-44 border border-gray-500 bg-gray-200"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">Role</label>
          <Dropdown
            ref={dropdownRef}
            options={[setStudentOption, setTeacherOption]}
            dropdownOpen={dropdownOpen}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            dropdownStyles="rounded mt-2 w-44 border"
          >
            <div className="w-44 cursor-pointer rounded border border-gray-500 bg-gray-200 p-1">
              {role.toLowerCase()}
            </div>
          </Dropdown>
        </div>
      </div>

      <Button>Register</Button>

      <div
        className={clsxm(
          "absolute -bottom-16 w-full rounded border border-red-500 bg-red-100 p-2",
          error ? "visible" : "invisible",
        )}
      >
        {error}
      </div>
    </form>
  );
};

export default RegistrationForm;
