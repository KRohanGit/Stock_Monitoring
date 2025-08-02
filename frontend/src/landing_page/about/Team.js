import React from "react";
function Team() {
  return (
    <div className="container border-top">
      {/* Hero Header */}
      <div className="row py-3 mt-4 mb-2 text-center">

        <div className="col">
          <h1 className="my-4 fw-bold">People</h1>
          {/* <p className="fs-5 mb-4">
                        We provide real-time stock market data and insights to help you make informed investment decisions.
                    </p> */}
        </div>
      </div>

      {/* About + Track Sections */}
      <div className="row p-5 mt-5 mb-5">
        {/* About Our Company */}
        <div className="col-6 text-start">
          <img
            src="/assets/AIPhoto.jpg"
            alt="Team"
            className="img-fluid rounded-circle mb-4 d-block mx-auto"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
          <h4 className="text-center text-muted">Rohan Krovvidi</h4>
          <h5 className="text-center text-muted">Developer</h5>
        </div>

        {/* Spacer */}
        <div className="col-1"></div>

        {/* Track the Market */}
        <div className="col-5 text-start">
          <h2 className="my-4">Track the Market Efficiently</h2>
          <div className="text-muted small">
            <p>
              Skilled in programming languages such as Java, Python, C, and SQL.
              Experienced in web development using HTML, CSS, JavaScript, React,
              and Node.js. Familiar with backend technologies including MongoDB
              and payment integration using Razorpay.
            </p>
            <p>
              Completed multiple projects like a stock monitoring app, Amazon
              clone, and course platform. Knowledgeable in machine learning
              concepts like logistic and polynomial regression.
            </p>
            <p>
              Actively preparing for placements with focus on DSA, LLD, and
              cloud computing fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
