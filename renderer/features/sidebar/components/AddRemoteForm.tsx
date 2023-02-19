import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

type Props = {
  addRemote: (remoteName: string, url: string) => void;
};

const AddRemoteForm = ({ addRemote }: Props) => {
  const [open, setOpen] = useState(false);
  const [remoteName, setRemoteName] = useState("origin");
  const [urlValue, setUrlValue] = useState("");

  const handleAddRemote = () => {
    setOpen(false);
    addRemote(remoteName, urlValue);
  };

  return open ? (
    <div className="flex flex-col gap-2 ">
      <Input
        placeholder="Remote name..."
        className="py-0.5"
        value={remoteName}
        onChange={(e) => setRemoteName(e.target.value)}
      />
      <Input
        placeholder="Git URL..."
        className="py-0.5"
        value={urlValue}
        onChange={(e) => setUrlValue(e.target.value)}
      />
      <div className="flex w-full gap-2">
        <Button className="flex-1 py-0.5" onClick={handleAddRemote}>
          Add
        </Button>
        <Button className="py-0.5" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
    </div>
  ) : (
    <Button className="w-full py-0.5" onClick={() => setOpen(true)}>
      Add remote
    </Button>
  );
};

export default AddRemoteForm;
