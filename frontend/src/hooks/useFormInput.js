import { useState } from "react";

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: changeInputHandler,
  };
};

export default useFormInput;
