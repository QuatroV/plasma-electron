import dynamic from "next/dynamic";
import useTabsStore from "../../../hooks/tabsStore";
import ASTMainView from "../../abstractSyntaxTree/components/ASTMainView";

const MonacoEditorComponent = dynamic(
  import("../../editor/components/Editor"),
  {
    ssr: false,
  }
);

const MainViewVariants = {
  file: <MonacoEditorComponent />,
  AST: <ASTMainView />,
  undefined: <MonacoEditorComponent />,
};

const MainView = () => {
  const currentTab = useTabsStore((state) =>
    state.tabs.find((tab) => tab.active)
  );
  return MainViewVariants[currentTab?.type];
};

export default MainView;
