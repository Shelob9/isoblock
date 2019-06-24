//
import React from "react";

//Import component to test
import { Form } from "./Form";

//Import a renderer to test with
import TestRenderer from "react-test-renderer";

test("Form component", () => {
  //Props with sample data
  const props = {
    defaultValue: "Tooths",
    className: "wp-blocks-tooths",
    id: "something",
  };

  const component = TestRenderer.create(<Form {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
