import React, { useState } from "react";

const useToggle = (value) => {
  const [state, setState] = useState(value);
  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

export default useToggle;
