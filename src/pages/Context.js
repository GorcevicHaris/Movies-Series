import React, { createContext, useState } from "react";

const Kontext = createContext();

function ContextFunction({ children }) {
  const [search, setSearch, Data] = useState("");
  return (
    <Kontext.Provider value={{ search, setSearch, Data }}>
      {children}
    </Kontext.Provider>
  );
}

export default ContextFunction;
export { Kontext };
