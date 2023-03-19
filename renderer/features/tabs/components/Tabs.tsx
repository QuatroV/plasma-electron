import useLoadFile from "../../../hooks/useLoadFile";
import useFileStore from "../../../stores/fileStore";
import useTabsStore, { Tab as TabType } from "../../../hooks/tabsStore";
import Tab from "./Tab";

const Tabs = () => {
  const { openFile } = useLoadFile();

  const tabs = useTabsStore((state) => state.tabs);
  const deleteTab = useTabsStore((state) => state.deleteTab);
  const setActiveTab = useTabsStore((state) => state.setActiveTab);

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

  return (
    <div className="scrollbar draggable flex w-full max-w-full overflow-auto whitespace-nowrap bg-gradient-to-b from-gray-100 to-gray-200 font-rubik">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tabInfo={tab}
          onClose={handleClose}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Tabs;
