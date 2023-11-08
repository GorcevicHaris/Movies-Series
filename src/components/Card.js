import React from "react";
import "./card.css";
function Card({ product }) {
  return (
    <div className="card">
      <h1>{product.title}</h1>
      <h1>{product.id}</h1>
      <h1>{product.description}</h1>
      <h1>{product.brand}</h1>
      <h1>{product.type}</h1>
    </div>
  );
}

export default Card;
