import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://stock-monitoring-production.up.railway.app/allHoldings');
        console.log('Holdings data:', response.data);
        setAllHoldings(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching holdings:', err);
        setError('Failed to fetch holdings data');
        // Fallback to local data if API fails
        setAllHoldings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((stock) => stock["name"]);
//in the above line the stcok is an subarray of objects, each object representing a stock with properties like name, price, etc.
  // This maps the names of the stocks to create labels for the graph.
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
//The above will create a dataset for the graph, where each stock's price is represented as a data point. that will be seen in the graph as bars representing the price of each stock.
  //

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

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h4 className="fw-bold text-dark mb-3">Holdings ({allHoldings.length})</h4>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th className="fw-semibold">Instrument</th>
                <th className="fw-semibold">Qty.</th>
                <th className="fw-semibold">Avg. cost</th>
                <th className="fw-semibold">LTP</th>
                <th className="fw-semibold">Cur. val</th>
                <th className="fw-semibold">P&L</th>
                <th className="fw-semibold">Net chg.</th>
                <th className="fw-semibold">Day chg.</th>
              </tr>
            </thead>
            <tbody>
              {allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "text-success" : "text-danger";
                const dayClass = stock.isLoss ? "text-danger" : "text-success";

                return (
                  <tr key={index}>
                    <td className="fw-semibold">{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className="fw-semibold">{curValue.toFixed(2)}</td>
                    <td className={profClass + " fw-semibold"}>
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={profClass + " fw-semibold"}>{stock.net}</td>
                    <td className={dayClass + " fw-semibold"}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {allHoldings.reduce((total, stock) => total + (stock.avg * stock.qty), 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {allHoldings.reduce((total, stock) => total + (stock.price * stock.qty), 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {(() => {
              const totalInvestment = allHoldings.reduce((total, stock) => total + (stock.avg * stock.qty), 0);
              const currentValue = allHoldings.reduce((total, stock) => total + (stock.price * stock.qty), 0);
              const profitLoss = currentValue - totalInvestment;
              const percentage = totalInvestment > 0 ? ((profitLoss / totalInvestment) * 100).toFixed(2) : 0;
              return `${profitLoss >= 0 ? '+' : ''}${profitLoss.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${profitLoss >= 0 ? '+' : ''}${percentage}%)`;
            })()}
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;