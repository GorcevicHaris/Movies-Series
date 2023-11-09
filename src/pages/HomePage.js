import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./homepage.css";
import Card from "../components/Card";
import { Kontext } from "./Context";
import { useNavigate } from "react-router-dom";
//da prezentujem
// http://www.omdbapi.com/?i=tt3896198&apikey=92faf84a
//api.themoviedb.org/ to je API
///3/discover/movie to je API call
export default function HomePage() {
  const { search } = useContext(Kontext);
  const [data, setData] = useState([]);
  const [pagee, setPage] = useState(1);
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie`,
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: pagee,
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI0ZjZmNmY0ODMxMzA1NjM4Yzc2MTBkZWY5MTAxNSIsInN1YiI6IjY1NGJlZDQ0ZmQ0ZjgwMDBjN2ZlODU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeufyP_mNhGUJVvJ5RSSjvUVACQBVphLxHz4Ps7CKOI",
    },
  };
  function getSearchData() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: search,
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI0ZjZmNmY0ODMxMzA1NjM4Yzc2MTBkZWY5MTAxNSIsInN1YiI6IjY1NGJlZDQ0ZmQ0ZjgwMDBjN2ZlODU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeufyP_mNhGUJVvJ5RSSjvUVACQBVphLxHz4Ps7CKOI",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
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

  useEffect(() => {
    {
      search.length > 0 ? getSearchData() : console.log("asd");
    }
  }, [search]);
  console.log(data);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: 0, padding: 0, bgcolor: "black" }} fixed>
        <Box
          sx={{
            bgcolor: "black",
            minHeight: "auto",
            width: "98.6vw",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            p: "20px",
            gap: "10px",
          }}
        >
          <div className="input">
            {/* <input onChange={(e) => setSearch(e.target.value)}></input> */}
          </div>
          <div className="datas">
            {data.map((el) => (
              <Card product={el} />
            ))}
          </div>
          {/* <button
            onClick={() => {
              setPage(pagee + 1);
              console.log(pagee);
            }}
          >
            plus 1
          </button> */}
        </Box>
      </Container>
    </React.Fragment>
  );
}
