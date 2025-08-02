import React from 'react';

function Hero() {
    return ( 
        <>
            {/* Hero Section with Full Width Background */}
            <div className="container-fluid py-5 mb-5" style={{background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"}}>
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-8">
                            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
                                <i className="fas fa-headset me-2"></i>
                                24/7 Support Available
                            </span>
                            <h1 className="display-4 fw-bold mb-4 text-dark">How can we help you?</h1>
                            <p className="fs-5 text-muted lead mb-0">
                                Get instant answers or create a support ticket. Our team is here to assist you.
                            </p>
                        </div>
                    </div>

                    <div className='row g-4'>
                        {/* Support Portal Section */}
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-primary rounded-circle p-3 me-3">
                                        <i className="fas fa-search text-white fa-lg"></i>
                                    </div>
                                    <div>
                                        <h3 className="fw-bold mb-1 text-dark">Support Portal</h3>
                                        <small className="text-muted">Find instant solutions</small>
                                    </div>
                                </div>
                                
                                <p className="text-muted mb-4">
                                    Search our knowledge base for quick answers to common questions and help topics.
                                </p>
                                
                                <div className="position-relative mb-4">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg rounded-pill ps-5 pe-4" 
                                        placeholder="Search for help topics..."
                                        style={{border: "2px solid #e9ecef"}}
                                    />
                                    <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                                </div>
                                
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    <span className="badge bg-light text-muted px-3 py-2">Trading Issues</span>
                                    <span className="badge bg-light text-muted px-3 py-2">Account Setup</span>
                                    <span className="badge bg-light text-muted px-3 py-2">Payment Help</span>
                                </div>
                                
                                <button className="btn btn-primary rounded-pill px-4 w-100">
                                    <i className="fas fa-rocket me-2"></i>
                                    Search Knowledge Base
                                </button>
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-success rounded-circle p-3 me-3">
                                        <i className="fas fa-envelope text-white fa-lg"></i>
                                    </div>
                                    <div>
                                        <h3 className="fw-bold mb-1 text-dark">Contact Us</h3>
                                        <small className="text-muted">Get personal assistance</small>
                                    </div>
                                </div>
                                
                                <p className="text-muted mb-4">
                                    Can't find what you're looking for? Create a support ticket and we'll get back to you soon.
                                </p>
                                
                                <div className="mb-3">
                                    <div className="position-relative">
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg rounded-pill ps-5 pe-4" 
                                            placeholder="Your Full Name"
                                            style={{border: "2px solid #e9ecef"}}
                                        />
                                        <i className="fas fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <div className="position-relative">
                                        <input 
                                            type="email" 
                                            className="form-control form-control-lg rounded-pill ps-5 pe-4" 
                                            placeholder="your.email@example.com"
                                            style={{border: "2px solid #e9ecef"}}
                                        />
                                        <i className="fas fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                                    </div>
                                </div>
                                
                                <button className="btn btn-success rounded-pill px-4 w-100">
                                    <i className="fas fa-paper-plane me-2"></i>
                                    Create Support Ticket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Hero;