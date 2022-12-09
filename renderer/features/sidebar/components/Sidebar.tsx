import Explorer from "./Explorer";
import Flags from "./Flags";
import Registers from "./Registers";

const Sidebar = () => {
  return (
    <aside className=" flex h-[calc(100vh-74px)] w-64 min-w-[12rem] flex-col bg-gray-200 font-rubik">
      <Explorer />
      <Registers />
      <Flags />
    </aside>
  );
};

export default Sidebar;
