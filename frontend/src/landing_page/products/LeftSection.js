import React from 'react';

function LeftSection({imageURL, productName, description, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container p-5">
            <div className="row align-items-center">
                <div className="col-md-6 pe-5">
                    <img src={imageURL} alt={productName} className="img-fluid" style={{maxHeight: "300px", width: "100%", objectFit: "cover"}} />
                </div>
                <div className="col-md-6 ps-5">
                    <h1 className="mb-3">{productName}</h1>
                    <p className="mb-4 text-muted">{description}</p>
                    <div className="mb-3">
                        <a href={tryDemo} className="btn btn-primary me-3">Try Demo</a>
                        <a href={learnMore} className="btn btn-outline-secondary">Learn More</a>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href={googlePlay} className="me-3">
                            <img src="/assets/Google.png" alt="Google Play" style={{height: "40px", width: "auto"}} />
                        </a>
                        <a href={appStore}>
                            <img src="/assets/Apple.svg" alt="App Store" style={{height: "40px", width: "auto"}} />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default LeftSection;
