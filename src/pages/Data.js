import React, { useContext } from "react";
import "./data.css";
import { Kontext } from "./Context";
import { useParams } from "react-router-dom";
import { render } from "react-dom";
import ReactStars from "react-stars";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { colors } from "@mui/material";

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
  const { data } = useContext(Kontext);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardBackgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w342${data.backdrop_path})`,
    backgroundRepeat: "no-repeat",
  };
  const cardStyle = {
    maxWidth: 750,
    maxHeight: "auto",
    zIndex: 10,
    backgroundColor: "#484848",
    color: "white",
  };
  console.log(data);
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
                color: "yourColor",
                fontWeight: "bold",
                fontFamily: "initial",
                fontSize: "27px",
                color: "white",
              }}
            >
              {data.title}
            </Typography>
          }
          subheader={
            <Typography
              variant="subtitle1"
              sx={{
                color: "#808080", // Replace "yourSubheaderColor" with your desired color
                fontSize: "16px",
              }}
            >
              {data.release_date}
            </Typography>
          }
        />
        {data.backdrop_path ? (
          <CardMedia
            component="img"
            height="auto"
            sx={{
              borderRadius: 0,
              transform: "scale(1)",
              color: "white",
              filter: "brightness(0.8)",
            }}
            image={`https://image.tmdb.org/t/p/w342${data.backdrop_path}`}
            alt="Paella dish"
            color="white"
          />
        ) : (
          ""
        )}
        <CardContent>
          <Typography variant="body2" color="white">
            {data.overview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
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
