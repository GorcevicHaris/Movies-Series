import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import "./homepage.css";
import Card from "../components/Card";
// http://www.omdbapi.com/?i=tt3896198&apikey=92faf84a
export default function HomePage() {
  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [search, setSearch] = useState("");

  // Funkcija za dobijanje prvih podataka
  function getData() {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => setData(response.data.products));
  }

  // Funkcija za dobijanje drugih podataka na osnovu pretrage
  function getSecondData() {
    if (search) {
      // Provera da li je 'search' prazan
      axios
        .get(`https://dummyjson.com/products/categories/search?q=${search}`)
        .then((response) => setSecondData(response.data));
    }
  }

  // Efekat koji se izvršava kada se komponenta montira
  useEffect(() => {
    getData();
  }, []);

  // Efekat koji se izvršava kada se promeni 'search'
  useEffect(() => {
    getSecondData();
  }, [search]); // Pokreće se efekat svaki put kada se 'search' promeni

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: 0, padding: 0 }} fixed>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            minHeight: "auto",
            bgcolor: "red",
            width: "100vw",
            margin: 0,
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            p: "20px",
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={getSecondData}>Pretraga</button>
          {secondData.map((el) => (
            <Card product={el} /> // Ovde se prikazuju podaci koji su pronađeni u pretrazi
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
