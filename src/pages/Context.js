import React, { createContext, useState } from "react";

const Kontext = createContext();

function ContextFunction({ children }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [pagee, setPage] = useState(1);
  const [tvGenre, setTvGenre] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [secondData, setSecondData] = useState([]);
  return (
    <Kontext.Provider
      value={{
        search,
        setSearch,
        data,
        setData,
        pagee,
        setPage,
        secondData,
        setSecondData,
        movieGenre,
        setMovieGenre,
        tvGenre,
        setTvGenre,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </Kontext.Provider>
  );
}

export default ContextFunction;
export { Kontext };
