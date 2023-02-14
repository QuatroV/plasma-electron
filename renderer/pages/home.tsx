import type { NextPage } from "next";
import WelcomeModal from "../features/welcome/components/WelcomeModal";
import MenuBar from "../features/menubar/components/Menubar";
import dynamic from "next/dynamic";
import Tabs from "../features/tabs/components/Tabs";
import Toolbar from "../features/toolbar/components/Toolbar";
import Sidebar from "../features/sidebar/components/Sidebar";
import SettingsModal from "../features/settingsModal/components/SettingsModal";
import Breadcrumbs from "../features/editor/components/Breadcrumbs";
import ErrorModal from "../features/error/components/ErrorModal";
import CreateFileModal from "../features/createFileModal/components/CreateFileModal";

const TerminalContainer = dynamic(
  () => import("../features/terminal/components/TerminalContainer"),
  {
    ssr: false,
  }
);
const MonacoEditorComponent = dynamic(
  import("../features/editor/components/Editor"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <>
      <CreateFileModal />
      <ErrorModal />
      <SettingsModal />
      <div className=" bg-gray-400">
        <WelcomeModal />
        <MenuBar />
        {/* <Toolbar /> */}
        <main className="flex h-[calc(100vh-40px)] w-full">
          <Sidebar />
          <div className="relative z-0 flex-1">
            <Tabs />
            <Breadcrumbs />
            <MonacoEditorComponent />
            <TerminalContainer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
