import React from "react";
import "../Css/Product.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
//import Popover from "./Popover";

function Product({ title, image, id, price, rating, badge_id, variant, showGreenovation }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is >>>>>", basket);

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
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
          <span style={{ color: '#888', fontWeight: 500, marginLeft: 6 }}>2898</span>
        </div>
        <div className="product__subtitleb">
          Pickup <b>today</b><br />
          Delivery <b>today</b><br />
          Shipping, arrives <b>tomorrow</b>
        </div>
        <div className="product__actions" style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <button className="normal" onClick={addToBasket}>
            + Add
          </button>
        </div>
        {showGreenovation && (
          <div className="product__greenovation-row" style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Link to="/product" style={{ textDecoration: 'none' }}>
              <button className="greenovation">
                Available on Greenovation
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
