import React from 'react';

function Hero() {
    return (
        <div className="container-fluid">
            {/* Hero Header */}
            <div className="py-5" style={{background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"}}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
                                <i className="fas fa-building me-2"></i>
                                About Our Company
                            </span>
                            <h1 className="display-4 fw-bold mb-4 text-dark">Welcome to the Stock Monitoring Website</h1>
                            
                            <p className="fs-5 mb-4 text-muted lead">
                                We provide real-time stock market data and insights to help you make informed investment decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

            {/* About + Track Sections */}
            <div className="py-5" >
                <div className="container">
                    <div className="row">
                        {/* About Our Company */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="pe-lg-4">
                                <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-3">
                                    <i className="fas fa-users me-2"></i>
                                    Our Story
                                </span>
                                <h2 className="display-6 fw-bold mb-4 text-dark">About Our Company</h2>
                                <div className="text-muted">
                                    <p className="mb-3">
                                        Welcome to <strong>StockVerse Analytics</strong>, your ultimate companion in navigating the dynamic world of stock markets.
                                        We are a next-generation platform committed to delivering real-time data, insightful analytics, and intelligent forecasting
                                        to empower traders, investors, and institutions to make informed decisions with confidence.
                                    </p>
                                    <p className="mb-3">
                                        At StockVerse, we understand that timing, accuracy, and trust are crucial when dealing with market movements.
                                        Our platform is built with cutting-edge technology to provide you with up-to-date stock prices, performance metrics,
                                        financial news, and historical trends — all under one roof.
                                    </p>
                                    <p className="mb-0">
                                        Whether you're a beginner trying to understand the basics of investing, or an experienced trader seeking advanced tools
                                        for technical analysis, StockVerse offers customizable dashboards, interactive charts, and risk assessment features tailored
                                        to your unique goals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Track the Market */}
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <span className="badge bg-info-subtle text-info px-3 py-2 rounded-pill mb-3">
                                    <i className="fas fa-chart-line me-2"></i>
                                    Market Tracking
                                </span>
                                <h2 className="display-6 fw-bold mb-4 text-dark">Track the Market Efficiently</h2>
                                <div className="text-muted">
                                    <p className="mb-3">
                                        Stay up-to-date with live updates, analytics, and trends to maximize your portfolio's growth.
                                    </p>
                                    <p className="mb-3">
                                        <a href='' className="text-decoration-none text-primary fw-semibold">
                                            <i className="fas fa-external-link-alt me-1"></i>
                                            Rainmatter
                                        </a>, our fintech partner, provides cutting-edge tools and insights to enhance your trading experience.
                                    </p>
                                    <p className="mb-4">
                                        We're constantly innovating. Catch up on the latest updates on our blog or see what the media is saying about us.
                                    </p>
                                    
                                    <div className="d-flex gap-3">
                                        <button className="btn btn-primary rounded-pill px-4">
                                            <i className="fas fa-rocket me-2"></i>
                                            Get Started
                                        </button>
                                        <button className="btn btn-outline-secondary rounded-pill px-4">
                                            <i className="fas fa-blog me-2"></i>
                                            Read Blog
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}export default Hero;
