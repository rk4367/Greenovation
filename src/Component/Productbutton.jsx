import React from "react";
import "../Css/Productbutton.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Productbutton({ title, image, id, price, rating, badge_id, variant }) {
  const [{ basket }, dispatch] = useStateValue();

  const handleLinkClick = () => {
    // Scroll to the top of the page when the link is clicked
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        badge_id,
      },
    });
  };

  return (
    <div className={`productb ${variant ? variant + '-card' : ''}`}>
      <img src={image} alt="" />
      <span className="heart" title="Add to wishlist">♡</span>
      <div className="product__infob">
        <div className="product__priceb">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <p>{title}</p>
        <div className="product__ratingb">
          {Array(rating)
            .fill()
            .map((rate, i) => (
              <p key={i}>⭐</p>
            ))}
          <span>2898</span>
        </div>
        <div className="product__subtitleb">
          Pickup <b>today</b><br />
          Delivery <b>today</b>...
        </div>
        <div className="product__actions" style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <button className="normal" onClick={addToBasket}>
            + Add
          </button>
        </div>
        <div className="product__greenovation-row" style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <Link to="/product" style={{ textDecoration: 'none' }}>
            <button onClick={handleLinkClick} className="greenovation">
              Available on Greenovation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Productbutton;