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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//da prezentujem
// http://www.omdbapi.com/?i=tt3896198&apikey=92faf84a
//api.themoviedb.org/ to je API
///3/discover/movie to je API call
export default function HomePage() {
  const { search, pagee, setPage } = useContext(Kontext);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handlePageChange = (event, newPage) => {
    console.log("event-", event, newPage);
    setPage(newPage);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  function getData() {
    axios
      .get(
        `https://api.themoviedb.org/3/${search ? "search" : "discover"}/movie`,
        {
          params: {
            query: search,
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
        }
      )
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, [search, pagee]);

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
            {data.length > 0 ? (
              data.map((el) => <Card product={el} />)
            ) : (
              <div className="no-data">
                <h1 style={{ fontSize: "31px" }}>
                  No result found for "{search}".
                </h1>
                <h1>
                  Please try searching by move or series name,actor or character
                </h1>
              </div>
            )}
          </div>

          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                // Stilovi za pozadinu pojedinačnih dugmadi stranice
                width: "50px",
                height: "30px",
                color: "white",
                border: "1px solid #505050",
                borderRadius: 0,
              },
              "& .Mui-selected": {
                bgcolor: "#505050",
                border: "1px solid #909090",
                // Stilovi za označenu (trenutnu) stranicu
              },
            }}
            count={500}
            onChange={handlePageChange}
          />
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
