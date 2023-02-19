import Image from "next/image";
import FileIcon from "./FileIcon";

export const ExplorerItemIcon = ({ file }) => {
  if (file.kind === "file") {
    const fileExtension = file.name.split(".").pop();
    return <FileIcon fileExtension={fileExtension} />;
  }
  return (
    <Image
      alt="file"
      src={"/sidebar/expand_more_FILL0_wght400_GRAD0_opsz48.svg"}
      className={`${
        file.items.length && !file.items[0].visible ? "-rotate-90" : ""
      }`}
      height="16"
      width="16"
    />
  );
};

export default ExplorerItemIcon;
