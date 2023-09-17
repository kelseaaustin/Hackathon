import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./signupform.css";

function LoginForm() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginResult, setLoginResult] = useState("");
  const [username, setUsername] = useState(""); // Add this line to store the username
  const navigate = useNavigate(); // Initialize the useHistory hook

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), // Convert loginData to JSON format
      });

      if (response.ok) {
        // Login was successful
        // You can handle success here (e.g., redirect to a dashboard)
        setUsername(loginData.username);
        console.log("Login successful!");
        navigate("/welcome", { state: { username: loginData.username } });
      } else {
        // Login failed
        // You can handle failure here (e.g., show an error message)
        console.error("Login failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form className="form-container">
        <input
          className="input-field"
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
        />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button type="button" className="submit-button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
