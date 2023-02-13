import Image from "next/image";
import { BsFileEarmark } from "react-icons/bs";
import { GoCode, GoGear, GoZap } from "react-icons/go";
import { SiJson } from "react-icons/si";

export const ExplorerItemIcon = ({ file }) => {
  if (file.kind === "file") {
    const fileExtension = file.name.split(".").pop();
    switch (fileExtension) {
      case "asm":
      case "c":
      case "cpp":
      case "h":
        return <GoCode size={16} />;
      case "obj":
      case "bin":
      case "dll":
        return <GoGear size={16} />;
      case "exe":
        return <GoZap size={16} />;
      case "json":
        return <SiJson size={16} />;
      default:
        return <BsFileEarmark size={16} />;
    }
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
