import dynamic from "next/dynamic";

import useTabsStore from "../../../hooks/tabsStore";
import ASTMainView from "../../abstractSyntaxTree/components/ASTMainView";
import { OpenFilePlaceholder } from "../../editor/components/OpenFilePlaceholder";
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
  undefined: <OpenFilePlaceholder />,
};

const MainView = () => {
  const currentTab = useTabsStore((state) =>
    state.tabs.find((tab) => tab.active),
  );
  console.log({ currentTab }, currentTab?.type);
  return MainViewVariants[currentTab?.type];
};

export default MainView;
