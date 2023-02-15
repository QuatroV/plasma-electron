import { FaBook, FaGitAlt } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import useSidebarStore, { Tab } from "../stores/sidebarStore";
import clsxm from "../../../utils/clsxm";
import capitalize from "../../../utils/capitalize";

const tabs = [
  { name: "files", icon: <BsFolder /> },
  { name: "git", icon: <FaGitAlt /> },
  { name: "study", icon: <FaBook /> },
];

const SidebarTabs = () => {
  const tab = useSidebarStore((state) => state.tab);
  const setTab = useSidebarStore((state) => state.setTab);

  return (
    <div className="flex flex-row gap-1 bg-gray-300 py-1 px-1">
      {tabs.map(({ name, icon }, idx) => (
        <div
          key={idx}
          className={clsxm([
            `flex cursor-pointer flex-row items-center gap-1 rounded-full px-2  hover:bg-gray-100 active:scale-105`,
            {
              " bg-gray-100 shadow": tab === name,
            },
          ])}
          onClick={() => setTab(name as Tab)}
        >
          {icon} {capitalize(name)}{" "}
        </div>
      ))}
    </div>
  );
};

export default SidebarTabs;
