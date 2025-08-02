import React from "react";

function Universe() {
  return (
    <div className="container-fluid py-5" style={{background: "#ffffff"}}>
      <div className="container">

        <div className="row text-center text-dark mb-5">
          <div className="col-12">
            <h1 className="display-4 fw-bold mb-3">
              <i className="fas fa-chart-line me-3"></i>
              The Stock Verse
            </h1>
            <p className="lead fs-4 mb-0">
              Explore infinite possibilities in the world of trading and investments
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-3 text-center text-dark mb-3">
            <div className="bg-light border rounded-3 p-4 h-100">
              <i className="fas fa-users fa-3x mb-3 text-warning"></i>
              <h3 className="fw-bold">2M+</h3>
              <p className="mb-0">Active Traders</p>
            </div>
          </div>
          <div className="col-md-3 text-center text-dark mb-3">
            <div className="bg-light border rounded-3 p-4 h-100">
              <i className="fas fa-dollar-sign fa-3x mb-3 text-success"></i>
              <h3 className="fw-bold">$500B+</h3>
              <p className="mb-0">Daily Volume</p>
            </div>
          </div>
          <div className="col-md-3 text-center text-dark mb-3">
            <div className="bg-light border rounded-3 p-4 h-100">
              <i className="fas fa-globe fa-3x mb-3 text-info"></i>
              <h3 className="fw-bold">150+</h3>
              <p className="mb-0">Global Markets</p>
            </div>
          </div>
          <div className="col-md-3 text-center text-dark mb-3">
            <div className="bg-light border rounded-3 p-4 h-100">
              <i className="fas fa-clock fa-3x mb-3 text-primary"></i>
              <h3 className="fw-bold">24/7</h3>
              <p className="mb-0">Market Access</p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-4 mb-4">
            <div className="card bg-light border text-dark h-100">
              <div className="card-body text-center p-4">
                <i className="fas fa-rocket fa-4x mb-3 text-warning"></i>
                <h4 className="fw-bold mb-3">Lightning Fast Execution</h4>
                <p className="mb-0">Execute trades in milliseconds with our advanced technology</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card bg-light border text-dark h-100">
              <div className="card-body text-center p-4">
                <i className="fas fa-shield-alt fa-4x mb-3 text-success"></i>
                <h4 className="fw-bold mb-3">Bank-Level Security</h4>
                <p className="mb-0">Your investments protected with military-grade encryption</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card bg-light border text-dark h-100">
              <div className="card-body text-center p-4">
                <i className="fas fa-brain fa-4x mb-3 text-info"></i>
                <h4 className="fw-bold mb-3">AI-Powered Insights</h4>
                <p className="mb-0">Make smarter decisions with artificial intelligence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <div className="bg-light border rounded-4 p-5">
              <h2 className="text-dark fw-bold mb-3">Ready to Join the Verse?</h2>
              <p className="text-dark mb-4 fs-5">
                Start your trading journey today and become part of our growing community
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                <a href="/signup" className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                  <i className="fas fa-star me-2"></i>
                  Start Trading Now
                </a>
                <a href="#" className="btn btn-outline-dark btn-lg px-5 py-3 fw-bold">
                  <i className="fas fa-play me-2"></i>
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
