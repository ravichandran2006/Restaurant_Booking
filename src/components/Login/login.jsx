import React from "react";
import { Link } from "react-router-dom";
import "./auth.css"; // Create this file for styling

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to your Chef Food account</p>
        <form className="auth-form">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
