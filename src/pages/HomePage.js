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
  const [pagee, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?query=${search}`,
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: `${pagee}`,
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI0ZjZmNmY0ODMxMzA1NjM4Yzc2MTBkZWY5MTAxNSIsInN1YiI6IjY1NGJlZDQ0ZmQ0ZjgwMDBjN2ZlODU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeufyP_mNhGUJVvJ5RSSjvUVACQBVphLxHz4Ps7CKOI",
    },
  };
  console.log(search);
  function getData() {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, [pagee]);
  console.log(data);
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: 0, padding: 0 }} fixed>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            minHeight: "auto",
            width: "98.6vw",
            margin: 0,
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            p: "20px",
            gap: "10px",
          }}
        >
          <input onChange={(e) => setSearch(e.target.value)}></input>
          <button
            onClick={() => {
              setPage(pagee + 1);
              console.log(pagee);
            }}
          >
            plus 1
          </button>
          {data.map((el) => (
            <Card product={el} />
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
