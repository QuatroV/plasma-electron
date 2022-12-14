import type { NextPage } from "next";
import WelcomeModal from "../features/welcome/components/WelcomeModal";
import MenuBar from "../features/menubar/components/Menubar";
import dynamic from "next/dynamic";
import Tabs from "../features/tabs/components/Tabs";
import Toolbar from "../features/toolbar/components/Toolbar";
import Sidebar from "../features/sidebar/components/Sidebar";
import SettingsModal from "../features/settingsModal/components/SettingsModal";

const Terminal = dynamic(
  () => import("../features/terminal/components/Terminal"),
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
      <SettingsModal />
      <div className=" bg-gray-400">
        <WelcomeModal />
        <MenuBar />
        <Toolbar />
        <main className="flex h-[calc(100vh-40px)] w-full">
          <Sidebar />
          <div className="relative z-0 flex-1">
            <Tabs />
            <MonacoEditorComponent />
            <Terminal />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
