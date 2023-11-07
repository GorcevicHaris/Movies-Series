import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState } from "react";
export default function HomePage() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/k_12345678`)
      .then((response) => setData(response));
  }
  console.log(data);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: 0, padding: 0 }} fixed>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            width: "100vw",
            margin: 0,
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <button onClick={getData}></button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
