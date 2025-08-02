import React from 'react';
function stats() {
    return ( 
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-6 mb-5 mb-lg-0'>
                    <div className="pe-lg-4">
                        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-3">
                            <i className="fas fa-shield-check me-2"></i>
                            Trusted Platform
                        </span>
                        <h1 className='display-5 fw-bold mb-5 text-dark'>Trust with <span className="text-primary">confidence</span></h1>
                        
                        <div className="mb-4">
                            <div className="d-flex align-items-start mb-3">
                                <div className="bg-primary rounded-circle p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-users text-white"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">Customer-first always</h5>
                                    <p className='text-muted mb-0'>1.3+ crore customers trust our platform, making us the preferred choice for equity investments and trading excellence.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex align-items-start mb-3">
                                <div className="bg-success rounded-circle p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-ban text-white"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">No spam or hidden charges</h5>
                                    <p className='text-muted mb-0'>Transparent pricing with zero hidden fees. What you see is what you pay - building trust through honesty.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex align-items-start mb-3">
                                <div className="bg-info rounded-circle p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-globe text-white"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">The Stock Universe</h5>
                                    <p className='text-muted mb-0'>Access to global markets and comprehensive investment options that grow your portfolio across multiple asset classes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex align-items-start mb-3">
                                <div className="bg-warning rounded-circle p-3 me-4 flex-shrink-0">
                                    <i className="fas fa-chart-trending-up text-white"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">Do better with money</h5>
                                    <p className='text-muted mb-0'>Smart tools and insights help you make informed decisions, maximizing returns while minimizing risk.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-6'>
                    <div className="position-relative">
                        <div className="bg-light rounded-4 p-4 shadow-lg">
                            <img
                                src="https://img.etimg.com/thumb/width-420,height-315,imgsize-50678,resizemode-75,msid-111286819/markets/stocks/news/better-to-own-a-set-of-stocks-from-the-digital-ecosystem-rather-than-betting-on-one-stock-15-stock-with-upside-potential-of-upto-48/hands.jpg"
                                alt="Stock Ecosystem"
                                className="img-fluid rounded-3"
                            />
                        </div>
                        
                        <div className="position-absolute top-0 end-0 m-3">
                            <div className="bg-success rounded-circle p-3 shadow-sm">
                                <i className="fas fa-check text-white"></i>
                            </div>
                        </div>
                        
                        <div className="position-absolute bottom-0 start-0 m-3">
                            <div className="bg-white rounded-pill px-4 py-2 shadow-sm">
                                <small className="fw-bold text-success">
                                    <i className="fas fa-star me-1"></i>
                                    Trusted by 1.3+ Crore
                                </small>
                            </div>
                        </div>
                    </div>
                    
                    <div className='d-flex justify-content-center gap-4 mt-4'>
                        <a href='' className="btn btn-outline-primary rounded-pill px-4 py-2" style={{textDecoration:"none"}}>
                            <i className="fas fa-box me-2"></i>
                            Explore Products
                        </a>
                        <a href='' className="btn btn-primary rounded-pill px-4 py-2" style={{textDecoration:"none"}}>
                            <i className="fas fa-play me-2"></i>
                            Try Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default stats;