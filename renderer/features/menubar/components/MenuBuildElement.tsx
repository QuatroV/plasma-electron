import useRunFile from "../hooks/useRunFile";
import MenuElement from "./MenuElement";

const MenuBuildElement = () => {
  const { buildFile, linkFile, currentFileCanBeBuild, currentFileCanBeLinked } =
    useRunFile();

  const BuildCurrentFileOption = () => (
    <div
      onClick={buildFile}
      title={!currentFileCanBeBuild && "Wrong type of file"}
      className={!currentFileCanBeBuild && "cursor-not-allowed text-gray-500"}
    >
      Build Current File
    </div>
  );

  const BuildProjectOption = () => <div>Build Project</div>;

  const BuildFileOption = () => <div>Build File...</div>;

  const LinkCurrentFileOption = () => (
    <div
      onClick={linkFile}
      title={!currentFileCanBeLinked && "Wrong type of file"}
      className={!currentFileCanBeLinked && "cursor-not-allowed text-gray-500"}
    >
      Link Current File
    </div>
  );

  const LinkFileOption = () => <div>Link File...</div>;

  const LinkProjectOption = () => <div>Link Project</div>;

  const options = [
    BuildCurrentFileOption,
    BuildFileOption,
    BuildProjectOption,
    "divider",
    LinkCurrentFileOption,
    LinkFileOption,
    LinkProjectOption,
  ];

  return <MenuElement options={options} title="Build" />;
};

export default MenuBuildElement;
