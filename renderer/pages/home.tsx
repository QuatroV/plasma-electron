import { useEffect } from "react";
import type { NextPage } from "next";
import WelcomeModal from "../features/welcome/components/WelcomeModal";
import MenuBar from "../features/menubar/components/Menubar";
import Explorer from "../features/explorer/components/Explorer";
import { clear } from "idb-keyval";
import Image from "next/image";
import MonacoEditorComponent from "../features/editor/components/Editor";
import dynamic from "next/dynamic";
import Tabs from "../features/tabs/components/Tabs";

const Terminal = dynamic(
  () => import("../features/terminal/components/Terminal"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden bg-gray-400">
      <WelcomeModal />
      <MenuBar />
      <main className="flex h-[calc(100vh-40px)] w-full">
        <Explorer />
        <div className="z-0 flex-1">
          <Tabs />
          <MonacoEditorComponent />
          <Terminal />
        </div>
      </main>
    </div>
  );
};

export default Home;
