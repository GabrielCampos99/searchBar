import React from "react";

import * as C from "./style";
const Item = ({ items, searchTerm }) => {
  return (
    <C.Wrapper>
      {items
        .filter((item) => {
          if (searchTerm == "") {
            return item;
          } else if (
            item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return (
            <C.Item key={item.id}>
              <p>{item.first_name}</p>
            </C.Item>
          );
        })}
    </C.Wrapper>
  );
};

export default Item;
