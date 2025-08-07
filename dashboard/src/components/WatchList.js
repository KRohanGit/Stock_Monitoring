import React, { useState, useContext } from "react";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";


import {
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };

  return (
    <div className="bg-white h-100">
      <div className="p-3 border-bottom">
        <h6 className="fw-bold mb-3 text-dark">Watchlist</h6>
        <div className="input-group input-group-sm mb-2">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search stocks..."
            className="form-control"
          />
        </div>
        <small className="text-muted">{watchlist.length} / 50</small>
      </div>

      <div className="list-group list-group-flush" style={{ maxHeight: "400px", overflowY: "auto" }}>
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </div>

      <div className="p-3 border-top">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <div 
      className="list-group-item list-group-item-action p-2" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span className={`fw-semibold ${stock.isDown ? "text-danger" : "text-success"}`}>
            {stock.name}
          </span>
        </div>
        <div className="text-end">
          <div className="d-flex align-items-center gap-1">
            <small className={stock.isDown ? "text-danger" : "text-success"}>
              {stock.percent}
            </small>
            {stock.isDown ? (
              <i className="fas fa-caret-down text-danger"></i>
            ) : (
              <i className="fas fa-caret-up text-success"></i>
            )}
          </div>
          <small className="fw-bold text-dark">{stock.price}</small>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </div>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <div className="d-flex justify-content-center gap-2 mt-2">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleBuyClick}
      >
        <button className="btn btn-success btn-sm">Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="btn btn-danger btn-sm">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="btn btn-outline-secondary btn-sm">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="btn btn-outline-secondary btn-sm">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </div>
  );
};