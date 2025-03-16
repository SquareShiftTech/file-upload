import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { FaBars, FaTimes } from "react-icons/fa";
import avatarImage from "../../assets/avatar.png";

import { FaFileUpload } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";

import merged from "../../assets/merged.gif";
import mergedcopy from "../../assets/merged-copy.gif";

import PleaseScreen from "../Pages/PleaseScreen.js";
import forecast from "../../assets/forecast.png";

import OneClickInstall from "../OneClick/OneClickInstall.jsx";
import Distributer from "../Distributer/Distributer.jsx";
import LookerIframe from "../ExternalSiteInfo/LookerIframe.jsx";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [stockFile, setStockFile] = useState(null);
  const [salesFile, setSalesFile] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [stockUploadImage, setStockUploadImage] = useState();
  const [salesUploadImage, setSalesUploadImage] = useState();

  const handleNavigation = (page) => {
    setActivePage(page);
  };
  const handleFileChange = (event, type) => {
    if (type === "stock") {
      setStockUploadImage(merged);
      setStockFile(event.target.files[0]);
    } else if (type === "sales") {
      setSalesUploadImage(mergedcopy);
      setSalesFile(event.target.files[0]);
    }
  };

  const removeFile = (type) => {
    if (type === "stock") {
      setStockFile(null);
      setStockUploadImage(null);
    } else if (type === "sales") {
      setSalesFile(null);
      setSalesUploadImage(null);
    }
  };

  const handleStart = async () => {
    if (uploadComplete) {
      setActivePage("analytics");
      try {
        await fetch("http://34.57.184.57:5000/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Sample",
            type: "test",
          }),
        });
      } catch (error) {
        console.error("Error uploading:", error);
      }
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
            <AiOutlineDashboard
              className={`icon ${activePage === "iframe" ? "active" : ""}`}
              onClick={() => handleNavigation("iframe")}
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
                        src={stockUploadImage}
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
                        src={salesUploadImage}
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
          {activePage === "iframe" && <LookerIframe />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
