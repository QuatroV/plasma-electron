import { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const PushOption = () => {
  return <div>Push</div>;
};

const ForcePushOption = () => {
  return <div>Force Push</div>;
};

const SyncOption = () => {
  return <div>Sync</div>;
};

const options = [PushOption, ForcePushOption, SyncOption];

type Props = {
  commit: (value: string) => void;
};

const CommitForm = ({ commit }: Props) => {
  const [commitMessage, setCommitMessage] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  const [validInput, setValidInput] = useState(true);

  const handleCommit = () => {
    if (commitMessage.length > 72) {
      setValidInput(false);
      return;
    }
    commit(commitMessage);
    setCommitMessage("");
  };

  return (
    <div className="mb-2 flex flex-col gap-2 px-2 pt-2">
      <Input
        className="w-full break-words px-2 py-0.5 text-sm"
        placeholder="Commit message"
        value={commitMessage}
        invalid={!validInput}
        multiline
        onChange={(e) => setCommitMessage(e.target.value)}
      />
      <div className="flex w-full gap-2 text-sm">
        <Button
          className="flex-1 py-0.5"
          invalid={!validInput}
          onClick={handleCommit}
        >
          Commit
        </Button>
        <div className="relative flex items-stretch">
          <Dropdown
            dropdownOpen={dropdownOpen}
            options={options || []}
            ref={dropdownListRef}
            onClick={() => setDropdownOpen(true)}
            align="right"
          >
            <Button className="relative h-full py-0.5">
              <IoMdArrowDropdown />
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default CommitForm;
