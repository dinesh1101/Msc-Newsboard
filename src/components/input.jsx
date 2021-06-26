import React from "react";

const Input = ({ name, type, label, value, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        className="form-control"
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        id={name}
        required
      />
    </div>
  );
};

export default Input;
