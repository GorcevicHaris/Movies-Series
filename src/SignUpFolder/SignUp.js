import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Validation from "../Validation/SignUpValidation";
import axios from "axios";
function SignUp() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  // console.log(values, "values");
  function handleInput(event) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }
  // console.log(values);

  function handleInputSubmit(event) {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8071/sign_up", values)
        .then((res) => {
          navigate("/");
          console.log(res);
        })
        .catch((err) => console.log(err, "err"));
    }
  }

  const navigate = useNavigate();
  return (
    <div className="Big">
      <div className="Logincontainer">
        <strong>
          <h1 style={{ fontSize: "25px" }}>Sign-Up</h1>
        </strong>
        <form onSubmit={handleInputSubmit}>
          <div className="form-group">
            <strong>
              <label>Name:</label>
            </strong>
            <input
              className="inp2"
              onChange={handleInput}
              type="name"
              placeholder="Enter your Name "
              name="name"
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>
          <div className="form-group">
            <strong>
              <label>Email:</label>
            </strong>
            <input
              className="inp2"
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
              <label>Password:</label>
            </strong>
            <input
              className="inp2"
              onChange={handleInput}
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
          </div>
          <button className="btn2" type="submit">
            Sign up
          </button>
          <p style={{ paddingLeft: "100px", color: "red" }}>
            You are agree to aour terms and policies
          </p>
          <button
            className="btn2 btn3"
            onClick={() => navigate("/")}
            type="button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
