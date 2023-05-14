import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { BiBook } from "react-icons/bi";

import useWelcomeModalStore from "../../../stores/welcomeModalStore";
import MainButton from "./MainButton";
import OpenExistingProjectButton from "./OpenExistingProjectButton";

const ButtonsContainer = () => {
  const setStage = useWelcomeModalStore((state) => state.setStage);
  const [recentProjects, setRecentProjects] =
    useState<{ name: string; path: string }[]>();

  useEffect(() => {
    setRecentProjects(
      JSON.parse(localStorage.getItem("recentProjects") || "[]"),
    );
  }, []);

  const { data: session } = useSession();

  return (
    <div className="animate-slow-appear flex w-full flex-row gap-3">
      <div className="w-2/3">
        <div className="mb-3">
          <div className="text-3xl font-black">Welcome to Plasma</div>
          <div className=" text-gray-700">
            Create new project or open an existing one
          </div>
        </div>

        <div>
          <MainButton
            title="Create new project"
            imgSrc="/welcome/add_circle_FILL0_wght400_GRAD0_opsz48.svg"
            onClick={() => setStage("createProject")}
          />
          <OpenExistingProjectButton
            title="Open existing project"
            imgSrc="/welcome/file_open_black_24dp.svg"
          />
          {session && (
            <MainButton
              title="Create new answer"
              onClick={() => setStage("createAnswer")}
            >
              <BiBook size={24} />
            </MainButton>
          )}
        </div>
      </div>

      <div className="w-1/3 border-l-2 border-dotted border-gray-100 pl-2 ">
        <div className="mb-2 text-xl font-light text-gray-500">
          Recent projects
        </div>
        <ul className=" flex-2 w-full">
          {recentProjects &&
            recentProjects.map((fileInfo, idx) => (
              <li
                key={idx}
                className={`flex w-full cursor-pointer flex-col items-start overflow-hidden hover:underline active:font-bold`}
              >
                <div className="text-gray-900">{fileInfo.name}</div>
                <div
                  title={fileInfo.path}
                  className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-light text-gray-500"
                >
                  {fileInfo.path}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ButtonsContainer;
