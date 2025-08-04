import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid px-5 py-2 shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/assets/logo.svg" alt="Logo" width="50" className="me-2" />
          <span className="fw-bold fs-4">apid Stocks</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-4">
              <a 
                className="nav-link fw-semibold" 
                href="http://localhost:3001/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up
              </a>
            </li>
            <li className="nav-item me-4">
              <a 
                className="nav-link fw-semibold" 
                href="http://localhost:3001/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link fw-semibold" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link fw-semibold" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link fw-semibold" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
