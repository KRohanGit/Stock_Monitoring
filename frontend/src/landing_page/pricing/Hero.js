import React from "react";

function Hero() {
  return (
    <>
      {/* Hero Section with Full Width Background */}
      <div className="container-fluid py-5 mb-5" style={{background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"}}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4 text-dark">Pricing</h1>
          <p className="fs-5 mb-0 text-muted">
            Free equity investments and flat ₹20 per order for intraday and F&O
            trades.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container border-bottom mb-5">
        <div className="row py-5 my-4 g-4">
          <div className="col-md-3 text-center">
            <div className="p-3">
              <i className="fas fa-chart-line fa-4x mb-3 text-success"></i>
              <h4 className="fw-bold mb-3">Free Equity Delivery</h4>
              <p className="text-muted mb-0">
                All equity delivery investments are absolutely free — ₹0
                brokerage.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="p-3">
              <i className="fas fa-clock fa-4x mb-3 text-primary"></i>
              <h4 className="fw-bold mb-3">Intraday and F&O Trades</h4>
              <p className="text-muted mb-0">
                Flat ₹20 per executed order on intraday trades across equity,
                currency, and commodity trades.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="p-3">
              <i className="fas fa-university fa-4x mb-3 text-info"></i>
              <h4 className="fw-bold mb-3">Free Direct MF</h4>
              <p className="text-muted mb-0">
                All direct mutual fund investments are absolutely free — ₹0
                commissions & DP charges.
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="p-3">
              <i className="fas fa-shield-alt fa-4x mb-3 text-warning"></i>
              <h4 className="fw-bold mb-3">Secure Trading</h4>
              <p className="text-muted mb-0">
                Bank-level security with two-factor authentication for all your
                trading activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
