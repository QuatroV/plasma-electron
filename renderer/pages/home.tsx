import type { NextPage } from "next";
import WelcomeModal from "../features/welcome/components/WelcomeModal";
import MenuBar from "../features/menubar/components/Menubar";
import dynamic from "next/dynamic";
import Tabs from "../features/tabs/components/Tabs";
import Sidebar from "../features/sidebar/components/Sidebar";
import SettingsModal from "../features/settingsModal/components/SettingsModal";
import Breadcrumbs from "../features/editor/components/Breadcrumbs";
import ErrorModal from "../features/error/components/ErrorModal";
import CreateFileModal from "../features/createFileModal/components/CreateFileModal";
import ContextMenu from "../features/contextMenu/components/ContextMenu";
import RenameFileModal from "../features/renameFileModal/components/RenameFileModal";
import ApproveDeleteModal from "../features/approveDeleteModal/components/ApproveDeleteModal";
import MainView from "../features/mainView/components/MainView";

const TerminalContainer = dynamic(
  () => import("../features/terminal/components/TerminalContainer"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <div className="select-none">
      <ContextMenu />
      <ApproveDeleteModal />
      <RenameFileModal />
      <CreateFileModal />
      <ErrorModal />
      <SettingsModal />
      <WelcomeModal />
      <div className=" bg-gray-300">
        <MenuBar />
        <main className="flex h-[calc(100vh-40px)] w-full">
          <Sidebar />
          <div className="relative z-10 flex-1">
            <Tabs />
            <Breadcrumbs />
            <MainView />
            <TerminalContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
