import useAST from "../../abstractSyntaxTree/hooks/useAST";
import useOllyDbg from "../../debug/hooks/useOllyDbg";
import useCreateListing from "../hooks/useCreateListing";
import MenuElement from "./MenuElement";

const MenuToolsElement = () => {
  const { buildAST } = useAST();
  const { createListing } = useCreateListing();
  const { startOllyDbg } = useOllyDbg();

  const BuildASTOption = () => {
    return <div onClick={buildAST}>Build AST For Current File</div>;
  };

  const CreateListingFileOption = () => {
    return (
      <div onClick={() => createListing()}>Create Listing For Current File</div>
    );
  };

  const DebugWithOllyDbgOption = () => {
    return <div onClick={() => startOllyDbg()}>Debug File with OllyDbg...</div>;
  };

  const options = [
    CreateListingFileOption,
    "hr",
    DebugWithOllyDbgOption,
    "hr",
    BuildASTOption,
  ];

  return <MenuElement title="Tools" options={options} />;
};

export default MenuToolsElement;
