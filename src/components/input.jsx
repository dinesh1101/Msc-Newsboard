import React from "react";

const Input = ({ name, type, label, value, handleChange, placeholder }) => {
  return (
    <div className="form-group needs-validation">
      <label htmlFor="name">{label}</label>
      <input
        className="form-control"
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
