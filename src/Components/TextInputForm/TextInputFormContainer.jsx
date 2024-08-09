import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState("password");

  function handleTextInputChange(event) {
    setValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (value == "") {
      alert("Please enter a word");
      return;
    }
    onSubmit?.(value);
  }

  return (
    <TextInputForm
      value={value}
      inputType={inputType}
      setInputType={setInputType}
      handleTextInputChange={handleTextInputChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
}

export default TextInputFormContainer;
