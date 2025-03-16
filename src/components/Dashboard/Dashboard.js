import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { FaBars, FaTimes } from "react-icons/fa";
import avatarImage from "../../assets/avatar.png";

import { FaFileUpload } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import success from "../../assets/success.png";
import PleaseScreen from "../Pages/PleaseScreen.js";
import forecast from "../../assets/forecast.png";

import OneClickInstall from "../OneClick/OneClickInstall.jsx";
import Distributer from "../Distributer/Distributer.jsx";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [stockFile, setStockFile] = useState(null);
  const [salesFile, setSalesFile] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const handleFileChange = (event, type) => {
    if (type === "stock") {
      setStockFile(event.target.files[0]);
    } else if (type === "sales") {
      setSalesFile(event.target.files[0]);
    }
  };

  const removeFile = (type) => {
    if (type === "stock") {
      setStockFile(null);
    } else if (type === "sales") {
      setSalesFile(null);
    }
  };

  const handleStart = () => {
    if (uploadComplete) {
      setActivePage("analytics");
    }
  };

  useEffect(() => {
    if (stockFile && salesFile) {
      setUploadComplete(true);
      console.log("stockFile", stockFile);
      console.log("salesFile", salesFile);
    } else {
      setUploadComplete(false);
    }
  }, [stockFile, salesFile]);

  console.log("uploadComplete", uploadComplete);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <button className="menu-button">
            <FaBars />
          </button>
          <nav className="nav-icons">
            <FaChartPie
              className={`icon ${activePage === "home" ? "active" : ""}`}
              onClick={() => handleNavigation("home")}
            />
            <FaFileUpload
              className={`icon ${activePage === "profile" ? "active" : ""}`}
              onClick={() => handleNavigation("profile")}
            />
            <FaTable
              className={`icon ${activePage === "settings" ? "active" : ""}`}
              onClick={() => handleNavigation("settings")}
            />
          </nav>
          <div className="profile-pic">
            <img src={avatarImage} alt="Profile" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {activePage === "home" && (
            <div className="centered-forecast-content">
              <img src={forecast} alt="forecast" className="edc-forecast" />
              <div className="start-section">
                <button
                  className="start-button"
                  disabled={!uploadComplete}
                  style={{ background: uploadComplete ? "#26B297" : "grey" }}
                  onClick={handleStart}
                >
                  Start
                </button>
              </div>
              <div className="upload-section">
                <div className="upload-wrapper-1">
                  {stockFile ? (
                    <div className="upload-box-1">
                      <img
                        src={success}
                        alt="success"
                        className="edc-success"
                      />
                    </div>
                  ) : (
                    <div className="upload-box-1">
                      <input
                        type="file"
                        id="file1"
                        onChange={(e) => handleFileChange(e, "stock")}
                      />
                      <span className="upload-icon">
                        <FaUpload />
                      </span>

                      <p className="upload-text">
                        Upload <strong>Stock Data</strong> File
                      </p>
                      <small>Drag and drop here</small>
                    </div>
                  )}

                  {stockFile && (
                    <div className="file-chip">
                      <span>{stockFile.name}</span>
                      <FaTimes
                        className="remove-icon"
                        onClick={() => removeFile("stock")}
                      />
                    </div>
                  )}
                </div>
                <div className="upload-wrapper">
                  {salesFile ? (
                    <div className="upload-box-2">
                      <img
                        src={success}
                        alt="success"
                        className="edc-success"
                      />
                    </div>
                  ) : (
                    <div className="upload-box-2">
                      <input
                        type="file"
                        id="file2"
                        onChange={(e) => handleFileChange(e, "sales")}
                      />
                      <span className="upload-icon">
                        <FaUpload />
                      </span>
                      <p className="upload-text">
                        Upload <strong>Sales Data</strong> File
                      </p>
                      <small>Drag and drop here</small>
                    </div>
                  )}
                  {salesFile && (
                    <div className="file-chip-2">
                      <span>{salesFile.name}</span>
                      <FaTimes
                        className="remove-icon"
                        onClick={() => removeFile("sales")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {activePage === "analytics" && <PleaseScreen />}

          {/* {activePage === "home" && (
            <div className="info-section">
              <h2 className="info-title">FORECAST AI</h2>
              <p className="info-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          )} */}

          {activePage === "profile" && (
            <div className="centered-content">
              <OneClickInstall />
            </div>
          )}
          {activePage === "settings" && (
            <div className="centered-content">
              <h2 className="distributer-title">EMAILS</h2>{" "}
              {/* Title for Distributer */}
              <Distributer />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
