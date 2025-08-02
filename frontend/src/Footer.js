import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container-fluid bg-gray-50 border-top mt-3 pt-4">
      <div className="container">
                    <div className="row">
        <div className="col">
          <img src="/assets/logo.svg" alt="Logo" width="50" />
          <p> &copy; Copyright 2025. All rights reserved.</p>
        </div>
        <div className="col">
          <h5>Company</h5>
          <Link to="" style={{ textDecoration: "none" }}>
            About
          </Link>
          <br></br>
          <Link to="" style={{ textDecoration: "none" }}>
            Products
          </Link>
          <br></br>
          <Link to="" style={{ textDecoration: "none" }}>
            Pricing
          </Link>
          <br></br>
          <Link to="" style={{ textDecoration: "none" }}>
            Referral programme
          </Link>
          <br></br>
          <Link to="" style={{ textDecoration: "none" }}>
            Carrers
          </Link>
          <br></br>
          <Link to="" style={{ textDecoration: "none" }}>
            Tech
          </Link>
          <br></br>
          <Link to="" style={{ textDecoration: "none" }}>
            Press and media
          </Link>
          <br></br>
          <Link to="" style={{ textDecoration: "none" }}>
            CSR
          </Link>
          <br></br>
        </div>
        <div className="col">
          <h5>Support</h5>
          <Link to="" style={{ textDecoration: "none" }}>
            Contact
          </Link>
          <br></br>
          <a href="" style={{ textDecoration: "none" }}>
            Support portal
          </a>
          <br></br>
          <a href="" style={{ textDecoration: "none" }}>
            Z-Correct blog
          </a>
          <br></br>
          <a href="" style={{ textDecoration: "none" }}>
            List of charges
          </a>
          <br></br>
          <a href="" style={{ textDecoration: "none" }}>
            Downloads and resources
          </a>
          <br></br>
        </div>
        <div className="col">
          <h5>Account</h5>
          <a href="" style={{ textDecoration: "none" }}>
            Open an account
          </a>
          <br></br>
          <a href="" style={{ textDecoration: "none" }}>
            Fund Transfer
          </a>
          <br></br>
          <a href="" style={{ textDecoration: "none" }}>
            Challenge
          </a>
          <br></br>
        </div>
      </div>
      <div className='mt-5 fs -6 text-small text-muted' style={{fontSize: "16px"}}>
      <p>Disclaimer The information provided on this website is for general
      informational purposes only. While we strive for accuracy, we make no
      warranties, express or implied, regarding its reliability, completeness,
      or suitability. Investments in securities carry risks, and past
      performance is not indicative of future results. All content is provided
      “as is” and should not be construed as professional financial advice. Use
      at your own risk.
      </p>
      <p>Investment Risk Notice
All investments involve inherent risks. The value of stocks and other securities may fluctuate due to market conditions, economic changes, or company performance. Users should conduct their own research or consult with a qualified financial advisor before making any investment decisions. We are not liable for any losses or damages resulting from reliance on information presented on this site.</p>
<p>Third-Party Content
Our platform may display or link to third-party data, news, or financial content for user convenience. We do not endorse, guarantee, or take responsibility for the accuracy, relevance, or reliability of third-party material. Users are encouraged to verify information independently before acting upon it.</p>
</div>
      </div>
    </div>
  );
}

export default Footer;
