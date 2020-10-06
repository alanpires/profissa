import React from "react";
import FeedbacksProfissa from "../index";
import renderer from "react-test-renderer";

describe("FeedbacksProfissa Test", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FeedbacksProfissa />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
