import React from "react";
import { Link } from "react-router-dom";
import "./auth.css"; // using the same auth.css as login

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create an Account</h2>
        <p className="auth-subtitle">Sign up for a Chef Food experience</p>
        <form className="auth-form">
          <label>Full Name</label>
          <input type="text" placeholder="Your full name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Create a strong password" required />

          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
