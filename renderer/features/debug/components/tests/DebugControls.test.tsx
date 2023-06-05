import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import DebugControls from "../DebugControls";

// Adjust this to the actual path of your component

describe("DebugControls", () => {
  // Hack, see link: https://github.com/facebook/react/issues/11565#issuecomment-380143358
  beforeAll(() => {
    //@ts-ignore
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    //@ts-ignore
    ReactDOM.createPortal.mockClear();
  });
  it("renders correctly", () => {
    const tree = renderer.create(<DebugControls />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
