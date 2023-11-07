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
  const [searh, setSearch] = useState();
  function getData() {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => setData(response.data.products));
  }
  useEffect(() => {
    getData();
  }, [searh]);
  console.log(data);
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
          <input></input>

          {data.map((el) => (
            <Card product={el} />
          ))}
          {/* <button onClick={getData}>Clicker</button> */}
        </Box>
      </Container>
    </React.Fragment>
  );
}
