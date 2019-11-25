import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...formInput }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...formInput} />
      {label ? (
        <label
          className={`${
            formInput.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
