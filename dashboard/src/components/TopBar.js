import React from "react";

import Menu from "./Menu";
import { useTheme } from "../ThemeContext";

const TopBar = () => {
  const { darkMode } = useTheme();

  return (
    <div 
      className={`shadow-sm border-bottom ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`} 
      style={{ 
        marginLeft: "250px",
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        borderColor: darkMode ? "#444" : "#dee2e6"
      }}
    >
      <div className="container-fluid py-2 px-4">
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center">
            <span className={`fw-bold me-2 ${darkMode ? 'text-light' : 'text-dark'}`}>NIFTY 50</span>
            <span className="fw-bold text-primary me-2">{100.2}</span>
            <span className="text-success small">+0.5%</span>
          </div>
          <div className="d-flex align-items-center">
            <span className={`fw-bold me-2 ${darkMode ? 'text-light' : 'text-dark'}`}>SENSEX</span>
            <span className="fw-bold text-primary me-2">{100.2}</span>
            <span className="text-success small">+0.3%</span>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;