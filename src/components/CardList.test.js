import React from "react";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { shallow, configure } from "enzyme";
import CardList from "./CardList";

configure({ adapter: new Adapter() });

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "John John",
      email: "john@gmail.com",
    },
  ];
  const component = renderer.create(<CardList robots={mockRobots} />).toJSON();
  expect(component).toMatchSnapshot();
});
