import React from "react";
import Tippy from "@tippyjs/react/headless";

const Tooltip = ({ children, tooltip, ...other }) => (
  <Tippy
    delay={11500}
    render={(attrs) => (
      <div
        className="animate-scale rounded bg-gray-800 p-2 text-xs text-white shadow transition-all"
        tabIndex={-1}
        {...attrs}
      >
        {tooltip}
      </div>
    )}
    {...other}
  >
    <div className="">{children}</div>
  </Tippy>
);

export default Tooltip;
