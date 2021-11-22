import React, { useRef } from "react";

import * as C from "./style";

import Item from "../Item";
const List = ({ items, searchTerm }) => {
  return (
    <C.Wrapper>
      <Item items={items} searchTerm={searchTerm} />
    </C.Wrapper>
  );
};

export default List;
