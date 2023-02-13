import useRunFile from "../../menubar/hooks/useRunFile";
import { VscPlay } from "react-icons/vsc";

const ToolbarItemRun = () => {
  const { runFile } = useRunFile();
  return (
    <VscPlay
      className=" cursor-pointer rounded after:bg-cyan-500 active:scale-125"
      title="Run"
      size={20}
      onClick={runFile}
    />
  );
};

export default ToolbarItemRun;
