import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Tooltip from "../Tooltip";

describe("Spinner", () => {
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
    const tree = renderer
      .create(<Tooltip tooltip="tooltip">Child</Tooltip>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
