import React from 'react';

function Pricing() {
    return ( 
        <div className='container-fluid py-5' style={{background: "#f8f9fa"}}>
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-lg-6 mb-5 mb-lg-0'>
                        <div className="pe-lg-4">
                            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-3">
                                <i className="fas fa-tag me-2"></i>
                                Transparent Pricing
                            </span>
                            <h1 className='display-5 fw-bold mb-4 text-dark'>
                                Unbeatable <span className="text-primary">Pricing Plans</span>
                            </h1>
                            <p className='fs-5 text-muted mb-4'>
                                Our pricing is designed to be <strong>transparent and competitive</strong>, 
                                with no hidden fees or surprises. Flat fees and crystal-clear charges. 
                                Choose the plan that suits you best and start trading with confidence.
                            </p>
                            
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-success rounded-circle p-2 me-3">
                                    <i className="fas fa-check text-white"></i>
                                </div>
                                <span className="fw-medium">No hidden charges</span>
                            </div>
                            
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary rounded-circle p-2 me-3">
                                    <i className="fas fa-shield-alt text-white"></i>
                                </div>
                                <span className="fw-medium">Transparent fee structure</span>
                            </div>
                            
                            <a href='' className="btn btn-outline-primary rounded-pill px-4 py-2" style={{ textDecoration: "none" }}>
                                <i className="fas fa-play me-2"></i>
                                Try Demo
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='row g-4'>
                            <div className='col-md-6'>
                                <div className='card border-0 shadow-sm h-100 text-center position-relative overflow-hidden'>
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-10"></div>
                                    <div className='card-body d-flex flex-column justify-content-center position-relative' style={{ minHeight: "250px" }}>
                                        <div className="mb-3">
                                            <i className="fas fa-gift fa-3x text-success mb-3"></i>
                                        </div>
                                        <h1 className="display-4 fw-bold text-success mb-2">₹0</h1>
                                        <h5 className="fw-bold mb-3">Free Trading</h5>
                                        <p className="text-muted mb-0">Free equity delivery and direct mutual funds</p>
                                        <div className="mt-3">
                                            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-1">
                                                Most Popular
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='card border-0 shadow-sm h-100 text-center position-relative overflow-hidden'>
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10"></div>
                                    <div className='card-body d-flex flex-column justify-content-center position-relative' style={{ minHeight: "250px" }}>
                                        <div className="mb-3">
                                            <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
                                        </div>
                                        <h1 className="display-4 fw-bold text-primary mb-2">₹20</h1>
                                        <h5 className="fw-bold mb-3">Pro Trading</h5>
                                        <p className="text-muted mb-0">IntraDay and F&O trades per order</p>
                                        <div className="mt-3">
                                            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-1">
                                                Flat Rate
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4">
                            <p className="text-muted mb-0">
                                <i className="fas fa-info-circle me-1"></i>
                                All prices are inclusive of applicable taxes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
