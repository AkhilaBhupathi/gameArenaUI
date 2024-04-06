import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DashBoard.css";

export default function DashBoard() {
  const navigate = useNavigate();

  function logoutAction() {
    localStorage.clear();
    window.location.href = "/";
  }

  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "Home") {
      navigate("/");
      return;
    }
    navigate(`/${tabName.toLowerCase()}`);

  };

  return (
    <div className="dashboard-header">
      <div className="website-name">
      <img
          src="images/gameArena.png"
          alt="GamesArena Logo"
          className="h-10 mr-2"
        />
        <h1 className="text-4xl font-bold text-teal-600 tracking-wide">
          Game<span className="text-yellow-400">Arena</span>
        </h1>

      </div>
      <div className="dashboard-tabs">
        <button
          className={`dashboard-tab ${activeTab === "Home" ? "selected" : ""}`}
          onClick={() => handleTabClick("Home")}
        >
          Home
        </button>
        <button
          className={`dashboard-tab ${
            activeTab === "Connections" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("Connections")}
        >
          Connections
        </button>
        <button
          className={`dashboard-tab ${
            activeTab === "Profile" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("Profile")}
        >
          Profile
        </button>
        <button className="dashboard-tab logout-button" onClick={logoutAction}>
          Logout
        </button>
      </div>
    </div>
  );
}
