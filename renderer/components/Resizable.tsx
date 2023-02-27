import { useRef, useState } from "react";
import clsxm from "../utils/clsxm";

type Props = {
  children: React.ReactElement;
  side: "top" | "bottom" | "right" | "left";
  dragDivStyles?: string;
  resizeCallback?: (e: any) => void;
  defaultSize?: string;
};

const Resizable = (props: Props): JSX.Element => {
  const { children, side, dragDivStyles, resizeCallback, defaultSize } = props;

  const resizableRef = useRef<HTMLDivElement>();

  const dragRef = useRef({ dragX: undefined, dragY: undefined });

  const [resized, setResized] = useState(false);

  console.log({ resized }, resized ? "" : defaultSize);

  const handleMouseMove = (e: any) => {
    if (!resizableRef.current) return;
    resizableRef.current.style.width = dragRef.current.dragX + "px";
    dragRef.current.dragX = e.clientX;

    resizeCallback && resizeCallback(e);
  };

  const handleMouseDown = (e) => {
    dragRef.current.dragX = e.clientX;
    setResized(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  if (side === "right") {
    return (
      <div className={clsxm("flex", resized ? "" : defaultSize)}>
        <div ref={resizableRef} className="w-full">
          {children}
        </div>
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={clsxm(
            dragDivStyles,
            "z-10 h-full w-0.5 cursor-ew-resize bg-transparent outline-emerald-400 transition-all delay-200 hover:bg-emerald-400 hover:outline hover:outline-1"
          )}
        />
      </div>
    );
  }

  return children;
};

export default Resizable;
