import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className="container-fluid py-5 border-bottom mb-5" style={{background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"}}>
            <div className="container">
                <h1 className="display-5 fw-bold mb-4 text-dark text-center">Technology</h1>
                <p className="text-center text-muted mt-3 fs-5"> Explore the latest in technology with our comprehensive product offerings. </p>
                <h6 className="text-center text-muted mb-5">
                    <Link className="btn btn-primary mt-3" style={{textDecoration: "none"}}>Learn More</Link>
                </h6>
            </div>
        </div>
     );
}

export default Hero;