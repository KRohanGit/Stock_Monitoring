import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3002/allPositions');
        console.log('Positions data:', response.data);
        setAllPositions(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching positions:', err);
        setError('Failed to fetch positions data');
        // Fallback to empty array if API fails
        setAllPositions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <h6 className="alert-heading">Error!</h6>
        {error}
      </div>
    );
  }
  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col">
          <h3 className="h4 text-dark fw-semibold">Positions ({allPositions.length})</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-hover table-sm">
              <thead className="table-light">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Instrument</th>
                  <th scope="col">Qty.</th>
                  <th scope="col">Avg.</th>
                  <th scope="col">LTP</th>
                  <th scope="col">P&L</th>
                  <th scope="col">Chg.</th>
                </tr>
              </thead>
              <tbody>
                {allPositions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profitLoss = (curValue - stock.avg * stock.qty).toFixed(2);
                  const profitClass = isProfit ? "text-success" : "text-danger";
                  const dayClass = stock.isLoss ? "text-danger" : "text-success";

                  return (
                    <tr key={index}>
                      <td className="fw-medium">{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>₹{stock.avg.toFixed(2)}</td>
                      <td>₹{stock.price.toFixed(2)}</td>
                      <td className={`fw-semibold ${profitClass}`}>
                        {isProfit ? '+' : ''}₹{profitLoss}
                      </td>
                      <td className={`fw-medium ${dayClass}`}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;