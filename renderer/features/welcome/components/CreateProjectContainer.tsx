import Image from "next/image";
import { useState } from "react";
import useFileStore from "../../../stores/fileStore";
import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import useCreateProject from "../hooks/useCreateProject";
import ChooseFilenameForm from "./ChooseFilenameForm";

const CreateProjectContainer = () => {
  const setStage = useWelcomeModalStore((state) => state.setStage);
  const setIsOpen = useWelcomeModalStore((state) => state.setIsOpen);
  const rootPath = useFileStore((state) => state.rootPath);

  const [userInput, setUserInput] = useState<string>();
  const [projectName, setProjectName] = useState<string>();
  const [architecture, setArchitecture] = useState<string>();
  const [assembly, setAssembly] = useState<string>();

  const { createProject } = useCreateProject(() => setIsOpen(false));

  const handleChooseDir = () => {
    createProject({ name: userInput, architecture, assembly });
  };

  const getTitleByStage = (projectName, architecture, assembly) => {
    switch (true) {
      case assembly !== undefined: {
        return "Choose directory";
      }
      case architecture !== undefined: {
        return "Choose assembler";
      }
      case projectName !== undefined: {
        return "Choose architecture";
      }
      default:
        return "Choose name";
    }
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex flex-row gap-2">
        <div className=" h-[40px] w-fit cursor-pointer rounded-full bg-white p-1 transition-all hover:scale-105 hover:bg-white hover:drop-shadow active:outline active:outline-2 active:outline-emerald-400">
          <Image
            src="/welcome/arrow_back_FILL0_wght400_GRAD0_opsz48.svg"
            alt="Icon"
            height="32"
            width="32"
            onClick={() => (rootPath ? setIsOpen(false) : setStage("welcome"))}
          />
        </div>
        <div className="animate-slow-appear">
          <div>
            Creating new project{projectName ? ` "${projectName}"` : ""}...
          </div>
          <div className="text-3xl font-black ">
            {getTitleByStage(projectName, architecture, assembly)}
          </div>
        </div>
      </div>

      <ChooseFilenameForm
        userInput={userInput}
        setUserInput={setUserInput}
        setProjectName={setProjectName}
      />

      <div
        className={`mb-3 flex animate-slow-appear-no-opacity flex-row gap-2 ${
          projectName ? "" : "pointer-events-none opacity-30"
        }`}
      >
        <ul className=" flex-2 w-full">
          <li
            className={`mb-1 flex cursor-pointer flex-row items-center gap-2 rounded p-1 transition-all hover:bg-slate-100 active:outline active:outline-2 active:outline-emerald-400 ${
              architecture === "x86" ? "bg-white" : ""
            }
            `}
            onClick={() => setArchitecture("x86")}
          >
            <Image
              src="/welcome/x86_4021.png"
              alt="Icon"
              height="32"
              width="32"
            />
            x86
          </li>
          <li
            className={`flex cursor-pointer flex-row items-center gap-2 rounded p-1 transition-all hover:bg-slate-100 active:outline active:outline-2 active:outline-emerald-400 ${
              architecture === "avr" ? " bg-white" : ""
            }
            `}
            onClick={() => setArchitecture("avr")}
          >
            <Image
              src="/welcome/avr_icon_132637.png"
              alt="Icon"
              height="32"
              width="32"
            />
            AVR
          </li>
        </ul>

        <ul
          className={`flex-2 once w-full rounded ${
            architecture ? "  animate-slow-appear bg-white" : "invisible"
          }`}
        >
          {architecture === "x86" ? (
            <>
              <li
                className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
                  assembly === "masm" ? "font-bold" : ""
                }`}
                onClick={() => setAssembly("masm")}
              >
                MASM
              </li>
              <li
                className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
                  assembly === "tasm" ? "font-bold" : ""
                }`}
                onClick={() => setAssembly("tasm")}
              >
                TASM
              </li>
              <li
                className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
                  assembly === "nasm" ? "font-bold" : ""
                }`}
                onClick={() => setAssembly("nasm")}
              >
                NASM
              </li>
            </>
          ) : (
            <>
              <li
                className={`flex h-[40px] cursor-pointer flex-row items-center rounded p-2 hover:underline ${
                  assembly === "avr-gcc" ? "font-bold" : ""
                }`}
                onClick={() => setAssembly("avr-gcc")}
              >
                AVR-GCC
              </li>
            </>
          )}
        </ul>
      </div>

      <button
        className={`float-right rounded  bg-white p-2 font-medium transition-all  ${
          assembly
            ? "hover:scale-105 hover:shadow-lg active:outline active:outline-emerald-400"
            : "cursor-not-allowed opacity-30"
        }`}
        onClick={handleChooseDir}
      >
        Choose directory
      </button>
    </div>
  );
};

export default CreateProjectContainer;
