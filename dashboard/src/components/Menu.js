import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div 
      className="bg-white dashboard-sidebar border-end" 
      style={{ 
        width: "250px", 
        height: "100vh", 
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0
      }}
    >
      {/* Header with Logo */}
      <div className="p-3 border-bottom">
        <div className="d-flex align-items-center">
          <img src="/assets/Logo.svg" alt="Logo" width="40" className="me-2" />
          <span className="fw-bold fs-5 text-primary">Dashboard</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="p-2">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-1">
            <Link
              className={`nav-link d-flex align-items-center py-2 px-3 rounded text-decoration-none ${
                selectedMenu === 0 ? 'bg-primary text-white' : 'text-dark hover-bg-light'
              }`}
              to="/"
              onClick={() => handleMenuClick(0)}
              style={{ fontSize: '0.9rem' }}
            >
              <i className="fas fa-tachometer-alt me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link
              className={`nav-link d-flex align-items-center py-2 px-3 rounded text-decoration-none ${
                selectedMenu === 1 ? 'bg-primary text-white' : 'text-dark hover-bg-light'
              }`}
              to="/orders"
              onClick={() => handleMenuClick(1)}
              style={{ fontSize: '0.9rem' }}
            >
              <i className="fas fa-list-alt me-2"></i>
              Orders
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link
              className={`nav-link d-flex align-items-center py-2 px-3 rounded text-decoration-none ${
                selectedMenu === 2 ? 'bg-primary text-white' : 'text-dark hover-bg-light'
              }`}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              style={{ fontSize: '0.9rem' }}
            >
              <i className="fas fa-chart-pie me-2"></i>
              Holdings
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link
              className={`nav-link d-flex align-items-center py-2 px-3 rounded text-decoration-none ${
                selectedMenu === 3 ? 'bg-primary text-white' : 'text-dark hover-bg-light'
              }`}
              to="/positions"
              onClick={() => handleMenuClick(3)}
              style={{ fontSize: '0.9rem' }}
            >
              <i className="fas fa-chart-line me-2"></i>
              Positions
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link
              className={`nav-link d-flex align-items-center py-2 px-3 rounded text-decoration-none ${
                selectedMenu === 4 ? 'bg-primary text-white' : 'text-dark hover-bg-light'
              }`}
              to="/funds"
              onClick={() => handleMenuClick(4)}
              style={{ fontSize: '0.9rem' }}
            >
              <i className="fas fa-wallet me-2"></i>
              Funds
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link
              className={`nav-link d-flex align-items-center py-2 px-3 rounded text-decoration-none ${
                selectedMenu === 5 ? 'bg-primary text-white' : 'text-dark hover-bg-light'
              }`}
              to="/apps"
              onClick={() => handleMenuClick(5)}
              style={{ fontSize: '0.9rem' }}
            >
              <i className="fas fa-th me-2"></i>
              Apps
            </Link>
          </li>
        </ul>

        {/* Divider */}
        <hr className="my-3" style={{ borderColor: '#dee2e6' }} />

        {/* Profile Section */}
        <div 
          className="d-flex align-items-center p-2 rounded bg-light dashboard-profile"
          style={{ cursor: "pointer" }}
          onClick={handleProfileClick}
        >
          <div 
            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2 fw-bold"
            style={{ 
              width: "35px", 
              height: "35px", 
              fontSize: "14px",
              minWidth: "35px",
              minHeight: "35px"
            }}
          >
            ZU
          </div>
          <span className="fw-semibold text-dark" style={{ fontSize: '0.9rem' }}>
            USERID
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;