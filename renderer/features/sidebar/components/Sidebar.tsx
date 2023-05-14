import Resizable from "../../../components/Resizable";
import useSidebarStore from "../stores/sidebarStore";
import DebugSidebar from "./DebugSidebar";
import Explorer from "./Explorer";
import GitExplorer from "./GitExplorer";
import SidebarTabs from "./SidebarTabs";
import StudySidebar from "./StudySidebar";

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
        <div className={tab !== "files" ? "hidden" : "h-full"}>
          <Explorer />
        </div>
        <div className={tab !== "git" ? "hidden" : "h-full"}>
          <GitExplorer />
        </div>
        <div className={tab !== "study" ? "hidden" : "h-full"}>
          <StudySidebar />
        </div>
        <div className={tab !== "debug" ? "hidden" : "h-full"}>
          <DebugSidebar />
        </div>
      </aside>
    </Resizable>
  );
};

export default Sidebar;
