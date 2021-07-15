import React from "react";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { shallow, configure } from "enzyme";
import Card from "./Card";

configure({ adapter: new Adapter() });

it("expect to render Card component", () => {
  const component = renderer.create(<Card />).toJSON();
  expect(component).toMatchSnapshot();
});
