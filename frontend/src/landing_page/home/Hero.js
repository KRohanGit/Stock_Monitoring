import React from 'react';

function hero() {
  return (
    <div className="container-fluid py-5" style={{background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"}}>
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="pe-lg-4">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
                <i className="fas fa-chart-trending-up me-2"></i>
                Professional Trading Platform
              </span>
              <h1 className="display-4 fw-bold mb-4 text-dark">
                Invest in all the <span className="text-primary">Stocks</span>
              </h1>
              <p className="fs-5 text-muted mb-4 lead">
                Advanced online platform for comprehensive stock analysis and seamless trading experience
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <button className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow-sm">
                  <i className="fas fa-rocket me-2"></i>
                  Get Started
                </button>
                <button className="btn btn-outline-secondary btn-lg px-4 py-3 rounded-pill">
                  <i className="fas fa-play me-2"></i>
                  Watch Demo
                </button>
              </div>
              <div className="row mt-5">
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-primary mb-1">2M+</h3>
                  <small className="text-muted">Active Users</small>
                </div>
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-success mb-1">500+</h3>
                  <small className="text-muted">Stocks Listed</small>
                </div>
                <div className="col-4 text-center">
                  <h3 className="fw-bold text-info mb-1">24/7</h3>
                  <small className="text-muted">Support</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="bg-white rounded-4 shadow-lg p-3">
                <img
                  src="http://www.trvanalyzer.com/wp-content/uploads/2014/12/TRV-3-Screen-1200.png"
                  alt="Stock trading dashboard screenshot"
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="position-absolute top-0 start-0 translate-middle">
                <div className="bg-success rounded-circle p-3 shadow">
                  <i className="fas fa-chart-line text-white fa-lg"></i>
                </div>
              </div>
              <div className="position-absolute bottom-0 end-0 translate-middle-x">
                <div className="bg-primary rounded-circle p-3 shadow">
                  <i className="fas fa-trending-up text-white fa-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
