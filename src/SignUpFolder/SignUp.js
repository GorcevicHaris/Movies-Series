import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="Big">
      <div className="Logincontainer">
        <h1>Sign-Up</h1>
        <form>
          <div className="form-group">
            <strong>
              <label>Name:</label>
            </strong>
            <input type="name" placeholder="Enter your Name " name="name" />
          </div>
          <div className="form-group">
            <strong>
              <label>Email:</label>
            </strong>
            <input
              type="email"
              placeholder="Enter your email adress"
              name="email"
            />
          </div>
          <div className="form-group">
            <strong>
              <label>Password:</label>
            </strong>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <button onSubmit={() => navigate("/")} type="submit">
            Sign up{" "}
          </button>
          <p style={{ paddingLeft: "20px" }}>
            You are agree to aour terms and policies
          </p>
          <button onClick={() => navigate("/")} type="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
