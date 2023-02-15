import MenuElement from "./MenuElement";

const BuildCurrentFileOption = () => <div>Build Current File</div>;

const BuildProjectOption = () => <div>Build Project</div>;

const BuildFileOption = () => <div>Build File...</div>;

const LinkCurrentFileOption = () => <div>Link Current File</div>;

const LinkProjectOption = () => <div>Link Project</div>;

const LinkFileOption = () => <div>Link File...</div>;

const MenuBuildElement = () => {
  const options = [
    BuildCurrentFileOption,
    BuildFileOption,
    BuildProjectOption,
    "divider",
    LinkCurrentFileOption,
    LinkProjectOption,
    LinkFileOption,
  ];

  return <MenuElement options={options} title="Build" />;
};

export default MenuBuildElement;
