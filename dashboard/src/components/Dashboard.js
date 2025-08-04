import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";
import { useTheme } from "../ThemeContext";

const Dashboard = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      try {
        const { data } = await axios.post(
          "https://stock-monitoring-production.up.railway.app/auth",
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUsername(data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUsername();
  }, []);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <div
      className="d-flex flex-column"
      style={{
        marginLeft: "250px",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1e1e1e" : "#f8f9fa",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      {/* User Header */}
      <div className={`d-flex justify-content-between align-items-center p-3 border-bottom ${darkMode ? "bg-dark text-white" : "bg-white text-dark"}`}>
        <div>
          <h5 className="mb-0">Welcome, {username || "User"}</h5>
          <small className="text-muted">Rapid Stocks Trading Platform</small>
        </div>
        <button 
          onClick={handleLogout}
          className="btn btn-outline-danger btn-sm"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="d-flex flex-grow-1">
        <GeneralContextProvider>
          <div
            className={`border-end ${darkMode ? "bg-dark text-white" : "bg-white text-dark"}`}
            style={{ width: "300px" }}
          >
            <WatchList />
          </div>
        </GeneralContextProvider>
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
