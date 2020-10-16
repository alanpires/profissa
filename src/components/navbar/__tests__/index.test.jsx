import React from "react";
import Nav from "../nav";
import renderer from "react-test-renderer";


jest.mock("react-redux", () => ({
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn(() => ({token: "token", user: {id: 1, name: "name"}})),
}))


describe("Nav Test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Nav open={true} showLogin={() => {}} setShowLogin={() => {}} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Nav open={false} showLogin={() => {}} setShowLogin={() => {}} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

 
});
