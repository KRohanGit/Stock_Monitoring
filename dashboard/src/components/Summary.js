import React from "react";

const Summary = () => {
  return (
    <>
      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h5 className="fw-bold text-dark mb-3">Hi, User!</h5>
      </div>

      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h6 className="fw-bold text-dark mb-3">Equity</h6>

        <div className="row">
          <div className="col-md-6">
            <div className="text-center p-3 bg-light rounded">
              <h4 className="fw-bold text-primary mb-1">3.74k</h4>
              <p className="text-muted mb-0">Margin available</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Margins used</span>
                <span className="fw-semibold">0</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted">Opening balance</span>
                <span className="fw-semibold">3.74k</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h6 className="fw-bold text-dark mb-3">Holdings (13)</h6>

        <div className="row">
          <div className="col-md-6">
            <div className="text-center p-3 bg-light rounded">
              <h4 className="fw-bold text-success mb-1">
                1.55k <small className="text-success">+5.20%</small>
              </h4>
              <p className="text-muted mb-0">P&L</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Current Value</span>
                <span className="fw-semibold">31.43k</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted">Investment</span>
                <span className="fw-semibold">29.88k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;