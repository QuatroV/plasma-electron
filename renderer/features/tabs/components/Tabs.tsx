import useTabsStore, { Tab as TabType } from "../../../hooks/tabsStore";
import useLoadFile from "../../../hooks/useLoadFile";
import useFileStore from "../../../stores/fileStore";
import Tab from "./Tab";

const Tabs = () => {
  const tabs = useTabsStore((state) => state.tabs);
  const reorderTabs = useTabsStore((state) => state.reorderTabs);
  const deleteTab = useTabsStore((state) => state.deleteTab);
  const setActiveTab = useTabsStore((state) => state.setActiveTab);

  const { openFile } = useLoadFile();

  const handleClose = (tab: TabType) => {
    deleteTab(tab.id);
  };

  const handleClick = (e, tab: TabType) => {
    setActiveTab(tab.id);
    const { path } = tab;
    if (path) {
      openFile(e, { ...tab, path, kind: "file", items: [], visible: true });
    }
  };

  console.log({ tabs });

  return (
    <div className="scrollbar draggable font-rubik flex w-full max-w-full overflow-auto whitespace-nowrap bg-gradient-to-b from-gray-100 to-gray-200">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          onClose={handleClose}
          onClick={handleClick}
          last={index === tabs.length - 1}
          tabInfo={tab}
          reorderTabs={reorderTabs}
        />
      ))}
    </div>
  );
};

export default Tabs;
