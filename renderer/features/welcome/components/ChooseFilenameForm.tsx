import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

type Props = {
  userInput: string;
  setUserInput: (value: string) => void;
  setProjectName: (value: string) => void;
};

const isValidWindowsFilename = (filname: string) =>
  !/[/\\?%*:|"<>]/g.test(filname);

const ChooseFilenameForm = (props: Props) => {
  const { setUserInput, userInput, setProjectName } = props;
  const [invalidInput, setInvalidInput] = useState(false);

  const handleSetProjectName = () => {
    if (!userInput || !isValidWindowsFilename(userInput)) {
      setInvalidInput(true);
      return;
    }
    setInvalidInput(false);
    setProjectName(userInput);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
    setInvalidInput(false);
  };

  return (
    <div className="mb-3 flex animate-slow-appear flex-row items-center gap-3">
      <label className="whitespace-nowrap">Project name</label>
      <Input
        type="text"
        invalid={invalidInput}
        value={userInput}
        onChange={handleChange}
        className=" w-auto"
      />
      <Button
        invalid={invalidInput}
        className="py-1"
        onClick={handleSetProjectName}
      >
        Set project name
      </Button>
    </div>
  );
};

export default ChooseFilenameForm;
