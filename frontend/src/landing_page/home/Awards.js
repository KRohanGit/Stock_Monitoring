import React from 'react';

function Awards() {
    return ( 
        <div className="container py-5">
            <div className="row align-items-center mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="position-relative">
                        <div className="bg-gradient rounded-4 p-4 shadow-lg">
                            <img
                                src="https://indiancompanies.in/wp-content/uploads/2021/02/Top-10-Stock-Brokers-Company-in-India.png"
                                alt="Top Stock Brokers in India"
                                className="img-fluid rounded-3"
                            />
                            <div className="position-absolute top-0 end-0 m-3">
                                <span className="badge bg-success rounded-pill px-3 py-2">
                                    <i className="fas fa-trophy me-1"></i>
                                    #1 in India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="ps-lg-4">
                        <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
                            <i className="fas fa-award me-2"></i>
                            Market Leader
                        </span>
                        <h1 className="display-5 fw-bold mb-4 text-dark">
                            Largest stock broker in <span className="text-primary">India</span>
                        </h1>
                        <p className="fs-5 text-muted mb-4">
                            Over <strong className="text-primary">5 million clients</strong> contribute to over <strong className="text-success">15%</strong> of all volumes in India daily by trading and investing in:
                        </p>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-primary-subtle rounded-circle p-2 me-3">
                                        <i className="fas fa-chart-candlestick text-primary"></i>
                                    </div>
                                    <span className="fw-medium">Futures and Options</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-warning-subtle rounded-circle p-2 me-3">
                                        <i className="fas fa-coins text-warning"></i>
                                    </div>
                                    <span className="fw-medium">Commodity derivatives</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-info-subtle rounded-circle p-2 me-3">
                                        <i className="fas fa-exchange-alt text-info"></i>
                                    </div>
                                    <span className="fw-medium">Currency derivatives</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-success-subtle rounded-circle p-2 me-3">
                                        <i className="fas fa-chart-line text-success"></i>
                                    </div>
                                    <span className="fw-medium">Stocks & IPOs</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-danger-subtle rounded-circle p-2 me-3">
                                        <i className="fas fa-university text-danger"></i>
                                    </div>
                                    <span className="fw-medium">Direct mutual funds</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-secondary-subtle rounded-circle p-2 me-3">
                                        <i className="fas fa-shield-alt text-secondary"></i>
                                    </div>
                                    <span className="fw-medium">Bonds and Government Securities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 pt-5 border-top">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <span className="text-muted fs-6 me-3">Trusted by leading media:</span>
                    </div>
                    <div className="col-auto">
                        <img
                            src="https://image.shutterstock.com/image-vector/heat-press-icon-cloth-hair-260nw-2356210729.jpg"
                            alt="Press Logo"
                            className="img-fluid opacity-75"
                            style={{ width: '120px', height: '40px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
