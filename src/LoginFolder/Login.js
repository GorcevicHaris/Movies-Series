import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Validation from "../Validation/LoginValidation";
export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleInputSubmit(event) {
    event.preventDefault();
    setValues(Validation(values));
  }

  function handleInput(event) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }

  const navigate = useNavigate();
  return (
    <div className="Big">
      <div className="Logincontainer">
        <h1>Sign-Up</h1>
        <form>
          <div className="form-group">
            <strong>
              <label>Email:</label>
            </strong>
            <input type="email" placeholder="Enter your email adress" />
          </div>
          <div className="form-group">
            <strong>
              <label>Password:</label>
            </strong>
            <input type="password" placeholder="Enter your password" />
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
