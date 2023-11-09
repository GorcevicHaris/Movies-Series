import React, { createContext, useState } from "react";

const Kontext = createContext();

function ContextFunction({ children }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  return (
    <Kontext.Provider value={{ search, setSearch, data, setData }}>
      {children}
    </Kontext.Provider>
  );
}

export default ContextFunction;
export { Kontext };
