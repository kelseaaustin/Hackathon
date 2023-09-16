// SignUpPage.js
import React, { useState } from "react";
// import "./signupform.css"; // Import the CSS file

function SignUpPage() {
  // Define your state and form handling logic here

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form>
        <input
          type="text"
          className="input-field"
          placeholder="Username"
          // Add more input fields as needed
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          // Add more input fields as needed
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          // Add more input fields as needed
        />
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
