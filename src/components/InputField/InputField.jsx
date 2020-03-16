import React from "react";
import styles from "./InputField.module.scss";

const InputField = props => {
  const { placeHolderText, handleInput } = props;
  return (
    <>
      <p>Enter the desired degrees you would like to turn the eyes with</p>
      <input
        type="text"
        placeholder={placeHolderText}
        onChange={event => handleInput(event.target.value)}
      />
    </>
  );
};

export default InputField;
