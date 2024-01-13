import React from "react";
import "./signup.css";
export default function SignUp() {
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
          <button type="submit">Sign up </button>
          <p style={{ paddingLeft: "20px" }}>
            You are agree to aour terms and policies
          </p>
          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
}
