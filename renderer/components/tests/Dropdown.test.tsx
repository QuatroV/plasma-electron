import renderer from "react-test-renderer";

import Dropdown from "../Dropdown";

describe("Dropdown", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Dropdown dropdownOpen={true} options={[]}>
          Child
        </Dropdown>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
