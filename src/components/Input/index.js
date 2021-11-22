import React from "react";

import * as C from "./style";
const Input = ({ onChange }) => {
  return (
    <C.Wrapper>
      <C.Input onChange={onChange} />
    </C.Wrapper>
  );
};

export default Input;
