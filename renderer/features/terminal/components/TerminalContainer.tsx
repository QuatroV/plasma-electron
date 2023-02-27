import { useState } from "react";
import Image from "next/image";
import Terminal from "./Terminal";
import TerminalOutput from "./TerminalOutput";
import { FaTerminal } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import TerminalNotifications from "./TerminalNotifications";
import TerminalTabs from "./TerminalTabs";

type Tab = "errors" | "output" | "terminal";

const TerminalContainer = () => {
  const [tab, setTab] = useState<Tab>("terminal");
  const [collapsed, setCollapsed] = useState(false);

  const [hasOutputNotification, setHasOutputNotification] = useState(false);

  const tabsProps = {
    tab,
    setTab,
    collapsed,
    setCollapsed,
    hasOutputNotification,
  };

  return (
    <div className="absolute bottom-2 w-full font-rubik">
      {collapsed && hasOutputNotification ? <TerminalNotifications /> : null}
      <div
        title={collapsed ? "Terminal" : undefined}
        className={`   border border-gray-300 bg-gradient-to-b from-gray-200 to-gray-300  p-2 shadow backdrop-blur-sm  ${
          collapsed
            ? " ml-auto mr-5 flex w-min cursor-pointer justify-center rounded-full p-5"
            : "mx-5 rounded-lg"
        }`}
        onClick={() => collapsed && setCollapsed(false)}
      >
        <TerminalTabs {...tabsProps} />

        <Terminal collapsed={tab !== "terminal" || collapsed} />
        <TerminalOutput
          collapsed={tab !== "output" || collapsed}
          hasOutputNotification={hasOutputNotification}
          setHasOutputNotification={setHasOutputNotification}
        />
      </div>
    </div>
  );
};

export default TerminalContainer;
