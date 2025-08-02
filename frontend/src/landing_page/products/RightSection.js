import React from "react";

function RightSection({ imageURL, productName, description,learnMore }) {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-md-6 ps-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4 text-muted">{description}</p>
          <a href={learnMore} className="btn btn-outline-secondary">Learn More</a>
          <div className="d-flex align-items-center"></div>
          
        </div>
        <div className="col-md-6 pe-5">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
