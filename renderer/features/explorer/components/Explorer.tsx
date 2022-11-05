import Image from "next/image";
import useFileStore, { FileInfo } from "../../../stores/fileStore";
import useLoadFile from "../hooks/useLoadFile";

const Explorer = () => {
  const files = useFileStore((state) => state.files);
  const { currentFile, openFile } = useLoadFile();

  return (
    <aside className=" w-48 min-w-[12rem]">
      <div className="bg-gray-200 p-1 font-semibold text-sm">Explorer</div>
      <div className=" shadow-inner overflow-y-auto h-[calc(100vh-68px)] pt-1 mb-1 bg-gray-200">
        {files.map((file, idx) => (
          <div
            className={`hover:bg-gray-300 cursor-pointer rounded-tl-md rounded-bl-md p-1 ml-1 flex items-center gap-2 text-sm ${
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
              height="16"
              width="16"
            />{" "}
            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Explorer;
