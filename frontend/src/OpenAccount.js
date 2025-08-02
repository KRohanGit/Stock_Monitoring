import React from 'react';
function OpenAccount() {
    return ( 
      <div className="container p-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10">
          <h1 className="mt-4 mb-3">Open a Demat Account</h1>
          <p className="mb-4">How to Open an account ? <a href='' className='mx-3' style={{textDecoration:"none"}}>See the tutorial  <i className="fas fa-arrow-right"></i></a></p>

          <button
            className="btn btn-primary px-4 py-2 fs-5"
            style={{ width: "160px", height: "45px" }}
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;