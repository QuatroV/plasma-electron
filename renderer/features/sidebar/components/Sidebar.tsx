import useSidebarStore from "../stores/sidebarStore";
import Explorer from "./Explorer";
import Flags from "./Flags";
import GitExplorer from "./GitExplorer";
import Registers from "./Registers";
import SidebarTabs from "./SidebarTabs";

const tabsContents = {
  files: <Explorer />,
  git: <GitExplorer />,
};

const Sidebar = () => {
  const tab = useSidebarStore((state) => state.tab);

  return (
    <aside className=" flex h-[calc(100vh-74px)] w-64 min-w-[12rem] flex-col bg-gray-200 font-rubik">
      <SidebarTabs />
      {tabsContents[tab]}
      <Registers />
      <Flags />
    </aside>
  );
};

export default Sidebar;
