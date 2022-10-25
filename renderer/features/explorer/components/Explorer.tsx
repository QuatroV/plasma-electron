import Image from "next/image";
import { set, get } from "idb-keyval";
import useFileStore, { FileInfo } from "../../../stores/fileStore";
import useLoadFile from "../hooks/useLoadFile";

const Explorer = () => {
  const files = useFileStore((state) => state.files);
  const { currentFile, openFile } = useLoadFile();

  return (
    <aside className=" w-60">
      <div className="bg-gray-300 p-1 shadow">Explorer</div>
      <div className=" overflow-y-auto h-[calc(100vh-72px)]">
        {files.map((file, idx) => (
          <div
            className={`hover:bg-gray-300 cursor-pointer rounded-tl-md rounded-bl-md p-1 mt-1 mb-1 ml-1 flex items-start gap-2 ${
              currentFile === file.name &&
              "bg-gray-300 hover:outline-emerald-400 hover:outline outline-1 transition-all"
            }`}
            key={idx}
            onClick={(e) => openFile(e, file)}
          >
            <Image
              alt={file.kind === "directory" ? "d" : "f"}
              src={
                file.kind === "directory"
                  ? "/explorer/folder_FILL0_wght400_GRAD0_opsz48.svg"
                  : "/explorer/description_FILL0_wght400_GRAD0_opsz48.svg"
              }
              height="24"
              width="24"
            />{" "}
            {file.name}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Explorer;
