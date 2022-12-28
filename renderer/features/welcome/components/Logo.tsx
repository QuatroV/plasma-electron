import Image from "next/image";
import BlobLogo from "../../../../resources/blob-logo.png";

const Logo = () => {
  return <Image src={BlobLogo} alt="Logo" height={120} width={120} />;
};

export default Logo;
