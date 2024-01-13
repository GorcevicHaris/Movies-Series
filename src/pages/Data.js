import React, { useContext, useState, useEffect } from "react";
import "./data.css";
import { Kontext } from "./Context";
import ReactStars from "react-stars";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Data() {
  const [ID, setID] = useState("");
  const { data } = useContext(Kontext);
  const [expanded, setExpanded] = React.useState(false);
  const [falsing, setFalsing] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(data, "data");

  const cardBackgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w342${data.backdrop_path})`,
    backgroundRepeat: "no-repeat",
  };
  const cardStyle = {
    maxWidth: 750,
    maxHeight: "auto",
    zIndex: 10,
    backgroundColor: "black",
    color: "white",
  };
  //
  return (
    <div style={cardBackgroundStyle} className="data">
      <Card sx={cardStyle}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "initial",
                fontSize: "27px",
                color: "white",
              }}
            >
              {data.title}
              {data.name}
            </Typography>
          }
          subheader={
            <Typography
              variant="subtitle1"
              sx={{
                color: "#808080",
                fontSize: "16px",
              }}
            >
              {data.release_date}
              {data.first_air_date}
            </Typography>
          }
        />
        <iframe
          title="one"
          src={`https://vidsrc.me/embed/${data.id}`}
          allowFullScreen
        ></iframe>
        <CardContent>
          <Typography variant="body2" color="white">
            {data.overview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            sx={{ color: "white" }}
            style={{ color: falsing ? "red" : "" }}
            onClick={() => setFalsing(true)}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }} aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{ color: "white" }} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography color="white" paragraph>
              <div className="stars">
                <ReactStars count={10} size={30} value={data.vote_average} />
                Votes: {data.vote_count}
                <br />
                Viewers: {data.popularity}
              </div>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
//netlify
