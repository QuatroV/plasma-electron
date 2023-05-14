import { useEffect } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { ipcRenderer } from "electron";

import ApproveDeleteModal from "../features/approveDeleteModal/components/ApproveDeleteModal";
import AuthModal from "../features/auth/components/AuthModal";
import ProfileModal from "../features/auth/components/ProfileModal";
import ContextMenu from "../features/contextMenu/components/ContextMenu";
import CreateFileModal from "../features/createFileModal/components/CreateFileModal";
import Breadcrumbs from "../features/editor/components/Breadcrumbs";
import ErrorModal from "../features/error/components/ErrorModal";
import MainView from "../features/mainView/components/MainView";
import MenuBar from "../features/menubar/components/Menubar";
import RenameFileModal from "../features/renameFileModal/components/RenameFileModal";
import SettingsModal from "../features/settingsModal/components/SettingsModal";
import Sidebar from "../features/sidebar/components/Sidebar";
import Tabs from "../features/tabs/components/Tabs";
import WelcomeModal from "../features/welcome/components/WelcomeModal";

const TerminalContainer = dynamic(
  () => import("../features/terminal/components/TerminalContainer"),
  {
    ssr: false,
  },
);

const Home: NextPage = () => {
  useEffect(() => {
    ipcRenderer.on("deeplink:redirect", (evt, message) => {
      console.log({ message });
    });
  }, []);

  return (
    <div className="select-none">
      <ContextMenu />
      <ApproveDeleteModal />
      <RenameFileModal />
      <CreateFileModal />
      <ErrorModal />
      <SettingsModal />
      <AuthModal />
      <ProfileModal />
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
