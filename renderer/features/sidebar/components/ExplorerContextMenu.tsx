import { useRef, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const ExplorerContextMenu = ({ children }) => {
  const NewFileOption = () => {
    return <div>New File</div>;
  };

  const OpenDirectoryOption = () => {
    return <div>Open Directory</div>;
  };

  const SaveFileOption = () => {
    return <div>Save File</div>;
  };

  const options = [NewFileOption, OpenDirectoryOption, SaveFileOption];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  return (
    <Dropdown
      options={options || []}
      onContextMenu={(e) => {
        dropdownListRef.current.style.position = "absolute";
        dropdownListRef.current.style.display = "block";
        dropdownListRef.current.style.left = e.pageX + "px";
        dropdownListRef.current.style.top = e.pageY + "px";
        setDropdownOpen(true);
      }}
      dropdownOpen={dropdownOpen}
      ref={dropdownListRef}
    >
      {children}
    </Dropdown>
  );
};

export default ExplorerContextMenu;
