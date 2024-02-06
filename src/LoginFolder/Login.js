import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Validation from "../Validation/LoginValidation";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  function handleInputSubmit(event) {
    event.preventDefault();
    setErrors(Validation(values));

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:8071/login", {
      method: "POST",
      headers: myHeaders,
      credentials: "include", // Postavljanje credentials na 'include' aktivira withCredentials
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "Success") {
          navigate("/home");
        } else {
          console.log(data);
          console.log("ne radi");
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  function handleInput(event) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }
  // console.log(values, "val");
  return (
    <div className="Big">
      <div className="Logincontainer">
        <h1>Sign-Up</h1>
        <form onSubmit={handleInputSubmit}>
          <div className="form-group">
            <strong>
              <label style={{ color: "red" }}>Email:</label>
            </strong>
            <input
              className="inp1"
              onChange={handleInput}
              type="email"
              placeholder="Enter your email adress"
              name="email"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <strong>
              <label style={{ color: "red" }}>Password:</label>
            </strong>
            <input
              className="inp1"
              onChange={handleInput}
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
          </div>
          <button className="btn1" type="submit">
            Login
          </button>
          <p style={{ paddingLeft: "100px", color: "red" }}>
            You are agree to aour terms and policies
          </p>
          <button
            className="btn1"
            onClick={() => navigate("/signup")}
            type="button"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
