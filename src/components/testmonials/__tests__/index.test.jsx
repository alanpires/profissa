import React from "react";
import Testmonials from "../index";
import renderer from "react-test-renderer";

describe("Testmonials Test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Testmonials image={""} name={"Roberto"} feedback={"muito Bom"} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Testmonials
          image={"Com imagem"}
          name={"Fernando"}
          feedback={"Muito Bom"}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
