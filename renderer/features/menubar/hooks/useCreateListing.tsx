import { ipcRenderer } from "electron";

import useFileStore from "../../../stores/fileStore";

const useCreateListing = () => {
  const currentFile = useFileStore((state) => state.currentFile);

  const createListing = async (path = currentFile.path) => {
    await ipcRenderer.invoke("app:on-create-listing", { path });
  };

  return { createListing };
};

export default useCreateListing;
