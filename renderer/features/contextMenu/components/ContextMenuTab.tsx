import useApproveDeleteModalStore from "../../../stores/approveDeleteStore";
import useContextMenuStore from "../../../stores/contextMenuStore";
import useRenameModalStore from "../../../stores/renameModalStore";
import useTabsStore from "../../../stores/tabsStore";
import { saveToClipboard } from "../../../utils/clipboard";
import ContextMenuItem from "./ContextMenuItem";

const ContextMenuTab = () => {
  const { tab } = useContextMenuStore((state) => state.contextData);
  const clearTabs = useTabsStore((state) => state.clearTabs);
  const clearToTheRightTabs = useTabsStore(
    (state) => state.clearToTheRightTabs,
  );

  const handleCopyPath = async () => {
    saveToClipboard(tab.path);
  };

  const handleCloseAllTabs = async () => {
    clearTabs();
  };

  const handleCloseToTheRight = async () => {
    clearToTheRightTabs(tab.id);
  };

  return (
    <>
      <h6 className="px-2 py-0.5 text-xs text-gray-500">{tab.name}</h6>
      <ContextMenuItem onClick={handleCopyPath}>Copy Path</ContextMenuItem>
      <hr className="m-1" />
      <ContextMenuItem onClick={handleCloseAllTabs}>
        Close All Tabs
      </ContextMenuItem>
      <ContextMenuItem onClick={handleCloseToTheRight}>
        Close To The Right
      </ContextMenuItem>
    </>
  );
};

export default ContextMenuTab;
