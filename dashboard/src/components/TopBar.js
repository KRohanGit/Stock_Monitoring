import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="bg-white shadow-sm border-bottom" style={{ marginLeft: "250px" }}>
      <div className="container-fluid py-2 px-4">
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center">
            <span className="fw-bold text-dark me-2">NIFTY 50</span>
            <span className="fw-bold text-primary me-2">{100.2}</span>
            <span className="text-success small">+0.5%</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="fw-bold text-dark me-2">SENSEX</span>
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