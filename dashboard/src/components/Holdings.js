import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";

import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    // Use local data instead of API call
    setAllHoldings(holdings);
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);

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
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;