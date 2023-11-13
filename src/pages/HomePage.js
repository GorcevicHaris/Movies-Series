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

export default function HomePage() {
  const {
    search,
    pagee,
    setPage,
    secondData,
    setSecondData,
    tvGenre,
    setTvGenre,
    movieGenre,
    setMovieGenre,
    selectedGenre,
    setSelectedGenre,
  } = useContext(Kontext);
  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const [dataType, setdataType] = useState("");
  const navigate = useNavigate();

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function getData(mediaType) {
    axios
      .get(
        `https://api.themoviedb.org/3/${
          search ? "search" : "discover"
        }/${mediaType}`,
        {
          params: {
            query: search,
            include_adult: "false",
            include_video: "false",
            language: "en-US",
            page: pagee,
            sort_by: "popularity.desc",
            with_genres: selectedGenre,
          },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI0ZjZmNmY0ODMxMzA1NjM4Yzc2MTBkZWY5MTAxNSIsInN1YiI6IjY1NGJlZDQ0ZmQ0ZjgwMDBjN2ZlODU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeufyP_mNhGUJVvJ5RSSjvUVACQBVphLxHz4Ps7CKOI",
          },
        }
      )
      .then((response) => {
        if (mediaType === "movie") {
          setData(response.data.results);
          setSecondData([]);
        } else if (mediaType === "tv") {
          setSecondData(response.data.results);
          setData([]);
        }
      });
  }

  function tv() {
    getData("tv");
  }

  function movie() {
    getData("movie");
  }
  function getAllData() {
    axios
      .all([
        axios.get(
          `https://api.themoviedb.org/3/${
            search ? "search" : "discover"
          }/movie`,
          {
            params: {
              query: search,
              include_adult: "false",
              include_video: "false",
              language: "en-US",
              page: pagee,
              sort_by: "popularity.desc",
              with_genres: selectedGenre,
            },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI0ZjZmNmY0ODMxMzA1NjM4Yzc2MTBkZWY5MTAxNSIsInN1YiI6IjY1NGJlZDQ0ZmQ0ZjgwMDBjN2ZlODU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeufyP_mNhGUJVvJ5RSSjvUVACQBVphLxHz4Ps7CKOI",
            },
          }
        ),
        axios.get(
          `https://api.themoviedb.org/3/${search ? "search" : "discover"}/tv`,
          {
            params: {
              query: search,
              include_adult: "false",
              include_video: "false",
              language: "en-US",
              page: pagee,
              sort_by: "popularity.desc",
              with_genres: selectedGenre,
            },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI0ZjZmNmY0ODMxMzA1NjM4Yzc2MTBkZWY5MTAxNSIsInN1YiI6IjY1NGJlZDQ0ZmQ0ZjgwMDBjN2ZlODU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeufyP_mNhGUJVvJ5RSSjvUVACQBVphLxHz4Ps7CKOI",
            },
          }
        ),
      ])
      .then(
        axios.spread((movieResponse, tvResponse) => {
          setSecondData(tvResponse.data.results);
          setData(movieResponse.data.results);
          setTvData(tvResponse.data.results);
          setMovieData(movieResponse.data.results);
        })
      );
  }
  function getTvGenre() {
    axios
      .get(`https://api.themoviedb.org/3/genre/tv/list`, {
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
      })
      .then((response) => setTvGenre(response.data.genres));
  }

  function getMovieGenre() {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list`, {
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
      })
      .then((response) => {
        setMovieGenre(response.data.genres);
      });
  }

  useEffect(() => {
    getAllData();
    getTvGenre();
    getMovieGenre();
  }, [search, pagee, selectedGenre]);
  //problem je sto u funkciji sta god zadnje ubacio u useffect to e da poziva zadnje po paginaciji ce samo to da racuna
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
          <div className="genre">
            <div className="movies-series">
              <button onClick={() => getAllData()} className="btn">
                M O V I E S - S E R I E S
              </button>
            </div>
            <div className="movies">
              <button onClick={() => getData("movie")} className="btn">
                M o v i e s
              </button>
            </div>
            <div className="series">
              <button onClick={() => getData("tv")} className="btn">
                S e r i e s
              </button>
            </div>
            <select onChange={(e) => setSelectedGenre(e.target.value)}>
              <option selected disabled>
                Genres
              </option>
              {tvGenre &&
                movieGenre.map((el) => (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="datas">
            <>
              {data.slice(0, 10).map((el) => (
                <Card key={el.id} product={el} />
              ))}
            </>
            {secondData.slice(0, 10).map((el) => (
              <Card key={el.id} product={el} />
            ))}
          </div>

          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                width: "50px",
                height: "30px",
                color: "white",
                border: "0.1px solid #505050",
                borderRadius: 0,
              },
              "& .Mui-selected": {
                bgcolor: "#404040",
                border: "1px solid #909090",
              },
            }}
            count={500}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
