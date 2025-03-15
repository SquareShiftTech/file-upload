import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import OneClickInstall from "./components/OneClick/OneClickInstall.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/oneclick" element={<OneClickInstall />} />

      </Routes>
    </Router>
  );
};

export default App;
