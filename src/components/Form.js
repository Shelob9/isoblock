import React from "react";

/**
 * The Form component
 */
export const Form = ({ defaultValue, onSubmit, className, id, onChange }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      <div>
        <label htmlFor={id}>Form Field</label>
        <input
          value={defaultValue}
          id={id}
          onChange={onChange}
          className={"isoblock-field"}
        />
      </div>
    </form>
  );
};
