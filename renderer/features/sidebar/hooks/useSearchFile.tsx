import { ipcRenderer } from "electron";
import { useState } from "react";
import useFileStore from "../../../stores/fileStore";
import { searchTreeForManyItems } from "../../../utils/treeSearch";

const useSearchFile = () => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  const files = useFileStore((state) => state.files);

  const searchFiles = async (searchPhrase) => {
    setLoading(true);
    const foundMatches = await searchTreeForManyItems(
      { path: "", items: files },
      searchPhrase,
      "path",
      "items",
      []
    );

    setResultsCount(foundMatches.length);

    if (foundMatches.length > 100) {
      setSearchResults(foundMatches.slice(0, 100));
    } else {
      setSearchResults(foundMatches);
    }
    setLoading(false);
  };

  return { searchResults, loading, searchFiles, resultsCount };
};

export default useSearchFile;
