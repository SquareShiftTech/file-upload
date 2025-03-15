import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/login.png"; // Adjust path as needed
import sqsImage from "../../assets/images.jpeg"; // Adjust path as needed

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <img src={loginImage} alt="Background" className="background-image" />
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <div style={styles.topBanner}></div>

          <img src={sqsImage} alt="Background" className="logo" />

          <h2 style={styles.heading}>LOGIN</h2>
          <input
            type="text"
            placeholder="User Name"
            style={styles.inputField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={styles.buttonContainer}>
            <button
              style={{
                ...styles.loginButton,
                background: username && password ? "#26B297" : "#a5d6a7",
                cursor: username && password ? "pointer" : "not-allowed",
              }}
              onClick={handleLogin}
              disabled={!username || !password}
            >
              Login
            </button>{" "}
            <a href="#" style={styles.forgotPassword}>
              Forgot Password?
            </a>
          </div>
          <div style={styles.signupContainer}>
            <a href="#" style={styles.link}>
              Signup for a New Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "10%",
  },
  topBanner: {
    position: "relative",
    top: -70,
    left: -60,
    width: "80%",
    height: 55,
    background: "linear-gradient(to right, #12CA95, #8FEDAD)",
    borderTopLeftRadius: "80px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "140px",
    // transform: "skewX(-20deg)",
    // position: 'relative',
    // left: -60,
    // top: -70,,
    // width: 80%,
    // height: 55px,
    // background: linear-gradient(to right, rgb(18, 202, 149), rgb(143, 237, 173)),
    // border-top-left-radius: 80px,
    // border-top-right-radius: 0px,
    // border-bottom-right-radius: 140px,
  },
  loginBox: {
    background: "white",
    padding: "60px",
    borderRadius: "50px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "450px",
    textAlign: "center",
  },
  logoPlaceholder: {
    width: "100px",
    height: "50px",
    background: "#ddd",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#666",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
    textAlign: "left",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  loginButton: {
    padding: "10px 20px",
    background: "#26B297",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    width: "35%",
  },
  forgotPassword: {
    textDecoration: "none",
    color: "#666",
    fontSize: "14px",
  },
  signupContainer: {
    marginTop: "15px",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "#666",
    fontSize: "14px",
  },
};

export default Login;
