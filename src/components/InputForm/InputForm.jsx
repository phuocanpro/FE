import { Input } from "antd";
import React, { useState } from "react";
import { WrapperInputStyle } from "./style";
const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "Input text", placeholderStyle, ...rests } = props;
  const inputStyle = {
    "::placeholder": {
      ...placeholderStyle,
    },
  };
  return (
    <>
      <WrapperInputStyle
        placeholder={placeholder}
        value={valueInput}
        style={inputStyle}
        onChange={(e) => setValueInput(e.target.value)}
        {...rests}
      />
    </>
  );
};
export default InputForm;
