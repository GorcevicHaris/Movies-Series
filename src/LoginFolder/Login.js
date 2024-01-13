import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Validation from "../Validation/LoginValidation";
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
  }

  function handleInput(event) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }

  return (
    <div className="Big">
      <div className="Logincontainer">
        <h1>Sign-Up</h1>
        <form onSubmit={handleInputSubmit}>
          <div className="form-group">
            <strong>
              <label>Email:</label>
            </strong>
            <input
              onChange={handleInput}
              type="email"
              placeholder="Enter your email adress"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <strong>
              <label>Password:</label>
            </strong>
            <input
              onChange={handleInput}
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
          </div>
          <button onClick={() => navigate("/signup")} type="submit">
            Sign up{" "}
          </button>
          <p style={{ paddingLeft: "20px" }}>
            You are agree to aour terms and policies
          </p>
          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
}
