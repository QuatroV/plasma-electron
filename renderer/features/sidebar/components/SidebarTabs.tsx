import { useState, useRef } from "react";
import { FaBook, FaGitAlt } from "react-icons/fa";
import { BsFolder, BsThreeDotsVertical } from "react-icons/bs";
import useSidebarStore, { Tab } from "../stores/sidebarStore";
import clsxm from "../../../utils/clsxm";
import capitalize from "../../../utils/capitalize";
import Dropdown from "../../../components/Dropdown";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { AiFillBug } from "react-icons/ai";

const tabs = [
  { name: "files", icon: <BsFolder /> },
  { name: "git", icon: <FaGitAlt /> },
  { name: "study", icon: <FaBook /> },
  { name: "debug", icon: <AiFillBug /> },
];

const getHiddenState = (index: number): string => {
  switch (index) {
    case 0:
      return "flex";
    case 1:
      return "flex";
    case 2:
      return "@[240px]:flex";
    case 3:
      return "@[330px]:flex";
    default:
      return "";
  }
};

const getHiddenTabsState = (index: number): string => {
  switch (index) {
    case 0:
      return "hidden";
    case 1:
      return "hidden";
    case 2:
      return "@[240px]:hidden";
    case 3:
      return "@[330px]:hidden";
    default:
      return "";
  }
};

const SidebarTabs = () => {
  const tab = useSidebarStore((state) => state.tab);
  const setTab = useSidebarStore((state) => state.setTab);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  const options = tabs.map(({ name, icon }, idx) => {
    return function Option() {
      return (
        <div
          key={idx}
          className={clsxm([
            `flex cursor-pointer items-center gap-2 whitespace-pre rounded pl-2 pr-2 pt-1 pb-1 hover:bg-gray-200 active:shadow-inner `,
            getHiddenTabsState(idx),
            {
              " bg-gray-200 shadow-inner": tab === name,
            },
          ])}
          onClick={() => {
            setTab(name as Tab);
            setDropdownOpen(false);
          }}
        >
          {icon} <div>{capitalize(name)}</div>
        </div>
      );
    };
  });

  return (
    <div className="z-10 flex flex-row items-center gap-1 bg-gray-300 py-1 px-1 @container">
      {tabs.map(({ name, icon }, idx) => (
        <div
          key={idx}
          className={clsxm([
            `hidden cursor-pointer flex-row items-center gap-1 rounded-full  px-2 hover:bg-gray-100 active:scale-105`,
            {
              " bg-gray-100 shadow": tab === name,
            },
            getHiddenState(idx),
          ])}
          onClick={() => setTab(name as Tab)}
        >
          {icon} {capitalize(name)}{" "}
        </div>
      ))}
      <div className=" hidden cursor-pointer rounded-full p-1 hover:bg-gray-100 @[175px]:ml-auto @[175px]:flex @[330px]:hidden">
        <Dropdown
          unstyledOptions
          align="right"
          dropdownStyles="z-40 rounded active:scale-100 top-full mr-1"
          onClick={() => setDropdownOpen(true)}
          dropdownOpen={dropdownOpen}
          ref={dropdownListRef}
          options={options}
        >
          <BsThreeDotsVertical />
        </Dropdown>
      </div>
    </div>
  );
};

export default SidebarTabs;
