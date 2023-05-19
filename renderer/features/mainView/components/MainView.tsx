import dynamic from "next/dynamic";

import useTabsStore from "../../../hooks/tabsStore";
import ASTMainView from "../../abstractSyntaxTree/components/ASTMainView";
import LessonMainView from "../../lesson/components/LessonMainView";

const MonacoEditorComponent = dynamic(
  import("../../editor/components/Editor"),
  {
    ssr: false,
  },
);

const MainViewVariants = {
  file: <MonacoEditorComponent />,
  AST: <ASTMainView />,
  lesson: <LessonMainView />,
  undefined: <MonacoEditorComponent />,
};

const MainView = () => {
  const currentTab = useTabsStore((state) =>
    state.tabs.find((tab) => tab.active),
  );
  return MainViewVariants[currentTab?.type];
};

export default MainView;
