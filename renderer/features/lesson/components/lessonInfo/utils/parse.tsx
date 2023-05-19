import { Transform } from "react-html-parser";
import { FaPlay } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

import { saveToClipboard } from "../../../../../utils/clipboard";

export const transform: Transform = (domNode) => {
  if (domNode.name === "h1") {
    const domData = domNode.children[0].data;
    return (
      <h1 id={domNode.attribs.id} className="my-2 text-4xl font-bold">
        {domData}
      </h1>
    );
  }
  if (domNode.name === "h2") {
    const domData = domNode.children[0].data;
    return (
      <h1 id={domNode.attribs.id} className="my-1 text-2xl font-bold">
        {domData}
      </h1>
    );
  }
  if (domNode.name === "h3") {
    const domData = domNode.children[0].data;
    return (
      <h1 id={domNode.attribs.id} className="my-1 text-lg font-bold">
        {domData}
      </h1>
    );
  }
  if (domNode.name === "pre" && domNode.attribs.class === "ql-syntax") {
    const domData = domNode.children[0].data;
    const handleCopy = () => saveToClipboard(domData);
    const handleExecute = () => {};
    return (
      <div className="relative mt-4 w-full rounded-b rounded-tr bg-gray-700 p-2 font-mono text-white before:absolute before:-top-4 before:left-0 before:rounded-t before:bg-gray-600 before:px-2 before:text-xs before:content-['Code_fragment']">
        <pre className="overflow-hidden">{domData}</pre>
        <div className="absolute right-2 top-2 flex items-center gap-2">
          <MdOutlineContentCopy
            onClick={handleCopy}
            className="cursor-pointer hover:scale-95 active:text-gray-400"
            size={20}
          />
          <FaPlay
            onClick={handleExecute}
            className="cursor-pointer hover:scale-95 active:text-gray-400"
            size={16}
          />
        </div>
      </div>
    );
  }
  return undefined;
};

export function addUniqueIdsToHeaders(html: string) {
  if (!window) return html;
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headers = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

  headers.forEach((header) => {
    header.id = `header-${window.crypto.randomUUID()}`;
  });

  return doc.body.innerHTML;
}
