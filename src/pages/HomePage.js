import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import "./homepage.css";
import Card from "../components/Card";
//da prezentujem
// http://www.omdbapi.com/?i=tt3896198&apikey=92faf84a
export default function HomePage() {
  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [search, setSearch] = useState("");

  function getData() {
    axios
      .get(`https://kitsu.io/api/edge/anime?page[limit]=20`)
      .then((response) => setData(response.data.data));
  }
  console.log(data);
  console.log(object);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: 0, padding: 0 }} fixed>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            minHeight: "200vh",
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
          <button onClick={getData}></button>
          {data.map((el) => (
            <Card product={el} />
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
