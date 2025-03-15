import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginImage from "../../assets/login.png"; // Adjust path as needed

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple authentication check
    if (username === "admin" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try admin/password");
    }
  };

  return (
    <div className="login-container">
      <img src={loginImage} alt="Background" className="background-image" />

      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
