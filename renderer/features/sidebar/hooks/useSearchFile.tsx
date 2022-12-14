import { useWorker, WORKER_STATUS } from "@koale/useworker";
import { useState } from "react";
import useFileStore from "../../../stores/fileStore";
import { searchTreeForManyItems } from "../../../utils/treeSearch";

const useSearchFile = () => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchWorker, { status }] = useWorker(
    (searchPhrase) =>
      searchTreeForManyItems(
        { path: "", items: files },
        searchPhrase,
        "path",
        "items",
        []
      ),
    { autoTerminate: true }
  );

  const files = useFileStore((state) => state.files);

  const searchFiles = async (searchPhrase) => {
    setLoading(true);
    console.log("FILES ", files, navigator.hardwareConcurrency, status);
    const foundMatches = await searchWorker(searchPhrase);
    console.log("foundMatches ", foundMatches);
    setLoading(false);
    setSearchResults(foundMatches);
  };

  return { searchResults, loading, searchFiles };
};

export default useSearchFile;
