import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = () => {
  return (
    <form className="flex flex-1 flex-col justify-between">
      <div className="mb-4 mt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">E-mail:</label>
          <Input
            type="email"
            className="w-44 border border-gray-500 bg-gray-200"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <label className=" whitespace-nowrap">Password:</label>
          <Input
            type="password"
            className="w-44 border border-gray-500 bg-gray-200"
          />
        </div>
      </div>

      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
