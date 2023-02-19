import { BsFileEarmark } from "react-icons/bs";
import { GoCode, GoGear, GoZap } from "react-icons/go";
import { VscJson } from "react-icons/vsc";

const FileIcon = ({ fileExtension }) => {
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
      return <VscJson size={16} />;
    default:
      return <BsFileEarmark size={16} />;
  }
};

export default FileIcon;
