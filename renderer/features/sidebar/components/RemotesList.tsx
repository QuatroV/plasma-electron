import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import useGitStore, { Remote } from "../stores/gitStore";
import AddRemoteForm from "./AddRemoteForm";

type Props = {
  addRemote: (remoteName: string, url: string) => void;
};

const RemotesList = (props: Props) => {
  const { addRemote } = props;
  const remotes = useGitStore((state) => state.remotes);

  return (
    <div className="flex flex-col gap-1">
      <div>Remotes</div>
      {remotes.length ? (
        remotes.map((remote, idx) => (
          <div key={idx}>
            <div className="flex justify-between">
              <div>{remote.name}</div>
              <HiDotsVertical className="cursor-pointer" size={14} />
            </div>
            <div className="text-xs text-gray-500">{remote.url}</div>
          </div>
        ))
      ) : (
        <AddRemoteForm addRemote={addRemote} />
      )}
    </div>
  );
};

export default RemotesList;
