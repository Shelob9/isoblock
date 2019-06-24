import React, { useState } from "react";
import Form from "./Form";
/**
 * The Form component
 */
export const FormApp = props => {
  const [value, onChange] = useState(props.defaultValue);
  return <Form {...props} defaultValue={value} onChange={onChange} />;
};
