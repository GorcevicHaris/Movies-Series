import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Kontext } from "./Context";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  boxSizing: "border-box",

  margin: "0",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(5),
    width: "auto",
    boxSizing: "border-box",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  margin: 0,
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "17ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

export default function Header() {
  const navigate = useNavigate();
  const { setSearch, setPage, data } = React.useContext(Kontext);
  const [value, setValue] = React.useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearch(value);
      setValue("");
      navigate("/");
    }
  };
  const handleMUILinkClick = () => {
    setSearch("");
    setPage(1);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          bgcolor: "black",
          margin: 0,
          padding: "0",
          borderBottom: "4px solid rgb(35,35,35) ",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              onClick={handleMUILinkClick}
              style={{ textDecoration: "none", color: "white " }}
              to={"/"}
            >
              MOVIES
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(e) => setValue(e.target.value)}
              inputProps={{ "aria-label": "search" }}
              onKeyDown={handleKeyDown}
              value={value}
            ></StyledInputBase>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
