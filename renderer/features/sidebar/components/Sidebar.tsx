import Resizable from "../../../components/Resizable";
import useSidebarStore from "../stores/sidebarStore";
import Explorer from "./Explorer";
import Flags from "./Flags";
import GitExplorer from "./GitExplorer";
import Registers from "./Registers";
import SidebarTabs from "./SidebarTabs";

const Sidebar = () => {
  const tab = useSidebarStore((state) => state.tab);

  return (
    <Resizable
      side="right"
      resizeCallback={() => dispatchEvent(new Event("resize-editor"))}
      defaultSize="w-64"
    >
      <aside className=" flex h-[calc(100vh-40px)] min-w-[12rem] flex-col bg-gray-200 font-rubik">
        <SidebarTabs />
        <div className={tab !== "files" ? "hidden" : null}>
          <Explorer />
        </div>
        <div className={tab !== "git" ? "hidden" : null}>
          <GitExplorer />
        </div>
        <Registers />
        <Flags />
      </aside>
    </Resizable>
  );
};

export default Sidebar;
