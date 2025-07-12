import React, { useState } from "react";
import "../Css/Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";
import Orders from "./Orders";

const Subtotal = () => {
  const [{ basket, history }, dispatch] = useStateValue();
  const [useGreenRewards, setUseGreenRewards] = useState(false);
  
  // Default green points
  const greenPoints = 13;
  const pointsToDollarRate = 0.1; // 1 point = $0.10
  const maxDiscountPercentage = 0.15; // Maximum 15% discount

  const subtotal = getBasketTotal(basket);
  const greenRewardsDiscount = useGreenRewards ? Math.min(greenPoints * pointsToDollarRate, subtotal * maxDiscountPercentage) : 0;
  const finalTotal = subtotal - greenRewardsDiscount;

  const handleProceed = () => {
    if (basket.length > 0) {
      // Check if the basket is not empty
      dispatch({
        type: "ADD_TO_HISTORY",
        items: basket,
      });

      dispatch({
        type: "CLEAR_BASKET",
      });
    }
  };

  const handleGreenRewardsChange = (e) => {
    setUseGreenRewards(e.target.checked);
  };

  return (
    <div className="subtotal">
      <NumericFormat
        value={subtotal}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
      />
      
      <div className="green-rewards-section">
        <div className="green-rewards-info">
          <div className="green-points-display">
            <span className="green-icon">🌱</span>
            <span className="points-text">Green Points Available: {greenPoints}</span>
          </div>
          <div className="green-rewards-checkbox">
            <input 
              type="checkbox" 
              className="green-checkbox" 
              checked={useGreenRewards}
              onChange={handleGreenRewardsChange}
            />
            <label className="green-label">
              Use Green Rewards (Save up to 15%)
            </label>
          </div>
        </div>
        
        {useGreenRewards && (
          <div className="discount-details">
            <div className="discount-row">
              <span>Green Rewards Discount:</span>
              <span className="discount-amount">-${greenRewardsDiscount.toFixed(2)}</span>
            </div>
            <div className="points-used">
              Points used: {Math.ceil(greenRewardsDiscount / pointsToDollarRate)} points
            </div>
          </div>
        )}
      </div>

      <div className="total-section">
        <div className="total-row">
          <span>Total:</span>
          <span className="final-total">${finalTotal.toFixed(2)}</span>
        </div>
        {useGreenRewards && (
          <div className="savings-message">
            You saved ${greenRewardsDiscount.toFixed(2)} with Green Rewards! 🌱
          </div>
        )}
      </div>

      {basket.length > 0 ? (
        <Link style={{ textDecoration: "none" }} to="/thanks">
          <button className="proceed" onClick={handleProceed}>
            Proceed to Buy
          </button>
        </Link>
      ) : (
        <button className="proceed" disabled={true}>
          Proceed to Buy
        </button>
      )}
    </div>
  );
};

export default Subtotal;
