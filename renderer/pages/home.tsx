import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useFileStore from "../stores/fileStore";
import WelcomeModal from "../features/welcome/components/WelcomeModal";
import MenuBar from "../features/menubar/components/Menubar";
import Explorer from "../features/explorer/components/Explorer";
import { get } from "idb-keyval";
import { clear } from "idb-keyval";
import Image from "next/image";
import MonacoEditorComponent from "../features/editor/components/Editor";
import dynamic from "next/dynamic";

const Terminal = dynamic(
  () => import("../features/terminal/components/Terminal"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const [editorText, setEditorText] = useState("");

  useEffect(() => {
    const handleFileChange = async () => {
      const newFileContent = await get("currentFile");
      setEditorText(newFileContent);
    };
    handleFileChange();
  }, [currentFile]);

  // Clear IDB on reload
  useEffect(() => {
    document.addEventListener("onbeforeunload", () => clear());
  }, []);

  return (
    <div className="bg-gray-400">
      <WelcomeModal />
      <MenuBar />
      <main className="flex w-full h-[calc(100vh-40px)]">
        <Explorer />
        <div className="z-0 flex-1">
          <div className="bg-gray-500 flex">
            <div className="bg-gray-300 p-1 border-l-2 shadow-lg cursor-pointer flex items-center gap-1">
              File 1
              <Image
                src="/editor/close_FILL0_wght400_GRAD0_opsz48.svg"
                height="20"
                width="20"
                alt=""
                className="hover:bg-gray-400 rounded"
              />
            </div>
            <div className="bg-gray-400 p-1 border-l-2 cursor-pointer">
              File 2
            </div>
            <div className="bg-gray-400 p-1 border-l-2 cursor-pointer">
              File 3
            </div>
          </div>
          <MonacoEditorComponent value={editorText} />
          <Terminal />
        </div>
      </main>
    </div>
  );
};

export default Home;
