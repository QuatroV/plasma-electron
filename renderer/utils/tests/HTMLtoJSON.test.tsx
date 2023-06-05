import { JsonElement, parseHtmlToJson } from "../HTMLtoJSON";

describe("parseHtmlToJson", () => {
  it("should correctly parse single element without children", () => {
    const div = document.createElement("div");
    div.id = "test-id";
    div.textContent = "Hello World";

    const expectedResult: JsonElement = {
      tag: "div",
      id: "test-id",
      text: "Hello World",
      children: [],
    };

    expect(parseHtmlToJson(div)).toEqual(expectedResult);
  });

  it("should correctly parse element with children", () => {
    const parentDiv = document.createElement("div");
    parentDiv.id = "parent";
    parentDiv.textContent = "Parent text";

    const childDiv = document.createElement("div");
    childDiv.id = "child";
    childDiv.textContent = "Child text";

    parentDiv.appendChild(childDiv);

    const expectedResult: JsonElement = {
      tag: "div",
      id: "parent",
      text: "Parent textChild text",
      children: [
        {
          tag: "div",
          id: "child",
          text: "Child text",
          children: [],
        },
      ],
    };

    expect(parseHtmlToJson(parentDiv)).toEqual(expectedResult);
  });
});
