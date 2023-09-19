import React from "react";

const InputText = ({ title, value, onChange }) => {
  return (
    <div>
      <br />
      <label htmlFor={title}>{title}: </label>
      <input
        type="number"
        name={title}
        placeholder={title}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
