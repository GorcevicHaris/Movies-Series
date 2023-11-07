import React from "react";

function Card({ product }) {
  return (
    <div className="card">
      <h1>{product.title}</h1>
      <h1>{product.id}</h1>
      <h1>{product.description}</h1>
      <h1>asdkasjdk</h1>
    </div>
  );
}

export default Card;
