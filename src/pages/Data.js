import React, { useContext } from "react";
import "./data.css";
import { Kontext } from "./Context";
import { useParams } from "react-router-dom";
function Data() {
  const { data } = useContext(Kontext);
  console.log(data, "sasd");
  return (
    <div className="data">
      <h1>{data.id}</h1>
    </div>
  );
}

export default Data;
