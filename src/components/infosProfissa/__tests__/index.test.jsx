import React from "react";
import InfosProfissa from "../index";
import renderer from "react-test-renderer";

describe("InfosProfissa Test", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<InfosProfissa />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
