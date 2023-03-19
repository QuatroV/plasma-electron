import Tree from "react-d3-tree";
import useASTStore from "../stores/ASTStore";

const ASTMainView = () => {
  const tree = useASTStore((state) => state.tree);
  return (
    <div className="h-full bg-white">
      <Tree orientation="vertical" data={JSON.parse(tree)} />
    </div>
  );
};

export default ASTMainView;
