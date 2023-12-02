import React, { useContext } from "react";
import "./card.css";
import { Kontext } from "../pages/Context";
import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();
  const { setData } = useContext(Kontext);
  return (
    <div
      onClick={() => {
        navigate(`/data/${product.id}`, setData(product));
      }}
      className="card"
    >
      <img
        alt=""
        className="images"
        src={`https://image.tmdb.org/t/p/w342${product.poster_path}`}
      ></img>
    </div>
  );
}

export default Card;
