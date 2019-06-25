//Fucntions to test:
import { save, edit } from "./index";
//Import a renderer to test with
import TestRenderer from "react-test-renderer";
//We will use this to make edit/save rendereable
import { createElement } from "@wordpress/element";

test("Block edit callback", () => {
  //Props with sample data
  const props = {
    attributes: {
      defaultValue: "Faces",
      blockId: ""
    },
    className: "wp-blocks-tooths",
    clientId: "something",
    setAttributes: jest.fn()
  };

  const component = TestRenderer.create(createElement(edit, props));
  expect(component.toJSON()).toMatchSnapshot();
});

test("Block save callback", () => {
  //Props with sample data
  const props = {
    attributes: {
      defaultValue: "Faces",
      blockId: ""
    },
    className: "wp-blocks-tooths",
    clientId: "something"
  };

  const component = TestRenderer.create(createElement(save, props));
  expect(component.toJSON()).toMatchSnapshot();
});

