import React, { useState } from "react";
import * as C from "./styleApp";

import JSONDATA from "./MOCK_DATA.json";
import List from "./components/List";
import Input from "./components/Input";

const App = () => {
  let items = JSONDATA;

  const [searchTerm, setSearchTerm] = useState("");

  const getValInput = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <C.Wrapper>
      <Input onChange={getValInput} />
      <List items={items} searchTerm={searchTerm} />
    </C.Wrapper>
  );
};

export default App;
