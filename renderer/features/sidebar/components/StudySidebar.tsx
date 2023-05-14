import { useSession } from "next-auth/react";

const StudySidebar = () => {
  const { data: session } = useSession();

  return <div></div>;
};

export default StudySidebar;
