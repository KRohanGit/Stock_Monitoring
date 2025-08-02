import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
      <div className="container p-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10">
          <h1 className="mt-4 mb-3">404 Not Found</h1>
          <p>Sorry the page you are looking for does not exsist</p>

          <button
            className="btn btn-primary px-4 py-2"
            style={{ width: "160px", height: "45px" }}
          >
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}> Go to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;