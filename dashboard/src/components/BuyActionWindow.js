import React, { useState } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyClick = async (e) => {
    e.preventDefault(); // Prevent any default behavior
    
    if (stockQuantity <= 0 || stockPrice <= 0) {
      alert("Please enter valid quantity and price.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: parseInt(stockQuantity),
        price: parseFloat(stockPrice),
        mode: "BUY",
      });

      console.log('Order response:', response.data);
      
      // Show success message and close window
      alert(`Order placed successfully! Stock: ${uid}, Qty: ${stockQuantity}, Price: ₹${stockPrice}`);
      
      GeneralContext.closeBuyWindow();
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button 
            className={`btn btn-blue ${isLoading ? 'disabled' : ''}`} 
            onClick={handleBuyClick}
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.6 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
          >
            {isLoading ? 'Placing Order...' : 'Buy'}
          </button>
          <button 
            type="button" 
            className="btn btn-grey" 
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;