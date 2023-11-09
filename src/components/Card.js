import React from "react";
import "./card.css";
function Card({ product }) {
  return (
    <div className="card">
      {/* <h1>{product.title}</h1>
      <h1>{product.id}</h1>
      <h1>{product.description}</h1>
      <h1>{product.brand}</h1>
      <h1>{product.type}</h1> */}
      {/* <h1>{product.attributes.createdAt}</h1> */}
      {/* <h6 style={{ fontSize: "7px" }}>{product.attributes.description}</h6>
      <a href={product.links.self}>link</a> */}
      <img src={`https://image.tmdb.org/t/p/w342${product.poster_path}`}></img>
      {/* <h1>{product.poster_path}</hx 1> */}
    </div>
  );
}

export default Card;