import { useRef, useState } from "react";
import clsxm from "../utils/clsxm";

type Props = {
  children: React.ReactElement;
  side: "top" | "bottom" | "right" | "left";
  dragDivStyles?: string;
  resizeCallback?: (e: any) => void;
  defaultSize?: string;
  minWidth?: number;
};

const Resizable = (props: Props): JSX.Element => {
  const {
    children,
    side,
    dragDivStyles,
    resizeCallback,
    defaultSize,
    minWidth,
  } = props;

  const resizableRef = useRef<HTMLDivElement>();
  const borderRef = useRef<HTMLDivElement>();

  const dragRef = useRef({ dragX: undefined, dragY: undefined });

  const [resized, setResized] = useState(false);

  const handleMouseMove = (e: any) => {
    if (!resizableRef.current || resizableRef.current.style.width < minWidth)
      return;
    resizableRef.current.style.width = dragRef.current.dragX + "px";
    dragRef.current.dragX = e.clientX;

    resizeCallback && resizeCallback(e);
  };

  const handleMouseDown = (e) => {
    dragRef.current.dragX = e.clientX;
    if (borderRef.current) {
      borderRef.current.classList.add(
        "outline",
        "outline-emerald-400",
        "bg-emerald-400",
        "outline-1"
      );
    }

    setResized(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    if (borderRef.current) {
      borderRef.current.classList.remove(
        "outline",
        "outline-emerald-400",
        "bg-emerald-400",
        "outline-1"
      );
    }
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  if (side === "right") {
    return (
      <div className={clsxm("relative flex", resized ? "" : defaultSize)}>
        <div ref={resizableRef} className="w-full">
          {children}
        </div>
        <div
          ref={borderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={clsxm(
            dragDivStyles,
            "absolute top-0 bottom-0 right-0 z-10 h-full w-1 cursor-ew-resize transition-all delay-200 "
          )}
        />
      </div>
    );
  }

  return children;
};

export default Resizable;
