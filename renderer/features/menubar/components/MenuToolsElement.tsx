import useAST from "../../abstractSyntaxTree/hooks/useAST";
import useCreateListing from "../hooks/useCreateListing";
import MenuElement from "./MenuElement";

const MenuToolsElement = () => {
  const { buildAST } = useAST();
  const { createListing } = useCreateListing();

  const BuildASTOption = () => {
    return <div onClick={buildAST}>Build AST For Current File</div>;
  };

  const CreateListingFileOption = () => {
    return (
      <div onClick={() => createListing()}>Create Listing For Current File</div>
    );
  };

  const options = [CreateListingFileOption, "hr", BuildASTOption];

  return <MenuElement title="Tools" options={options} />;
};

export default MenuToolsElement;
