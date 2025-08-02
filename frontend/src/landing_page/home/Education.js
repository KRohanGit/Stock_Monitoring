import React from 'react';

function Education() {
    return (  
        <div className='container py-5'>
            <div className='row align-items-center'>
                
                {/* Left Image */}
                <div className='col-lg-6 mb-5 mb-lg-0'>
                    <div className="position-relative">
                        <div className="bg-primary-subtle rounded-4 p-4">
                            <img 
                                src="https://media.assettype.com/analyticsinsight%2F2025-03-14%2F210aex90%2F5-Best-Stocks-to-Invest-in-March-2025.jpg?w=1024&auto=format,compress&fit=max" 
                                alt="Best Stocks March 2025" 
                                className="img-fluid rounded-3 shadow-sm" 
                            />
                        </div>
                        
                        <div className="position-absolute top-0 start-0 m-3">
                            <div className="bg-white rounded-circle p-3 shadow-sm">
                                <i className="fas fa-graduation-cap text-primary fa-lg"></i>
                            </div>
                        </div>
                        
                        <div className="position-absolute bottom-0 end-0 m-3">
                            <span className="badge bg-success rounded-pill px-3 py-2">
                                <i className="fas fa-book me-1"></i>
                                Free Education
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Text */}
                <div className='col-lg-6'>
                    <div className="ps-lg-4">
                        <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill mb-3">
                            <i className="fas fa-lightbulb me-2"></i>
                            Learn & Grow
                        </span>
                        
                        <h1 className='display-5 fw-bold mb-4 text-dark'>
                            Free and open <span className="text-primary">market education</span>
                        </h1>
                        
                        <div className="mb-4">
                            <div className="d-flex align-items-start mb-4">
                                <div className="bg-primary rounded-circle p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-book-open text-white"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">Comprehensive Learning</h5>
                                    <p className='text-muted mb-3'>
                                        Access the world's most comprehensive online stock market education covering everything 
                                        from basics to advanced trading strategies.
                                    </p>
                                    <a href='' className="btn btn-outline-primary btn-sm rounded-pill" style={{ textDecoration: "none" }}>
                                        <i className="fas fa-play me-2"></i>
                                        Start Learning
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex align-items-start">
                                <div className="bg-success rounded-circle p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-users text-white"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">Active Community</h5>
                                    <p className='text-muted mb-3'>
                                        Join TradingQ&A, India's most active trading and investment community 
                                        for all your market-related queries and discussions.
                                    </p>
                                    <a href='' className="btn btn-outline-success btn-sm rounded-pill" style={{ textDecoration: "none" }}>
                                        <i className="fas fa-comments me-2"></i>
                                        Join Community
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-light rounded-3 p-4 mt-4">
                            <div className="row text-center">
                                <div className="col-4">
                                    <h4 className="fw-bold text-primary mb-1">500+</h4>
                                    <small className="text-muted">Free Articles</small>
                                </div>
                                <div className="col-4">
                                    <h4 className="fw-bold text-success mb-1">100K+</h4>
                                    <small className="text-muted">Active Learners</small>
                                </div>
                                <div className="col-4">
                                    <h4 className="fw-bold text-warning mb-1">24/7</h4>
                                    <small className="text-muted">Support</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
