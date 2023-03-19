import useAST from "../../abstractSyntaxTree/hooks/useAST";
import MenuElement from "./MenuElement";

const MenuToolsElement = () => {
  const { buildAST } = useAST();

  const BuildASTOption = () => {
    return <div onClick={buildAST}>Build AST For Current File</div>;
  };

  const options = [BuildASTOption];

  return <MenuElement title="Tools" options={options} />;
};

export default MenuToolsElement;
