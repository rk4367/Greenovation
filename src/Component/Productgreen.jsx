import React, { useEffect, useState } from "react";
import "../Css/Productgreen.css";
import { useStateValue } from "../StateProvider";

function Product({ title, image, id, price, rating, carbon_red, badge_id }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is >>>>>", basket);

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

  let badge_photo = "";
  let badge_popover = "";

  if (badge_id === 1) {
    badge_photo = "../images/badge1.png";
    badge_popover = "../images/badge1_popover.png";
  } else if (badge_id === 2) {
    badge_photo = "../images/badge2.png";
    badge_popover = "../images/badge2_popover.png";
  } else if (badge_id === 3) {
    badge_photo = "../images/badge3.png";
    badge_popover = "../images/badge3_popover.png";
  } else if (badge_id === 4) {
    badge_photo = "../images/badge4.png";
    badge_popover = "../images/badge4_popover.png";
  } else if (badge_id === 5) {
    badge_photo = "../images/badge5.png";
    badge_popover = "../images/badge5_popover.png";
  }

  const [isBadgePopoverVisible, setBadgePopoverVisible] = useState(false);
  const [showInfoPopover, setInfoShowPopover] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const showBadgePopover = () => {
    setDontShowAgain(true);
    setBadgePopoverVisible(true);
  };

  const hideBadgePopover = () => {
    setBadgePopoverVisible(false);
  };

  const closeInfoPopover = () => {
    setDontShowAgain(true);
    setInfoShowPopover(false);
  };

  useEffect(() => {
    const item = document.getElementById("badgeToTrack");

    const handleScroll = () => {
      const itemRect = item.getBoundingClientRect();

      if (itemRect.top < 650 && itemRect.bottom > 200) {
        setInfoShowPopover(true);
      } else {
        setInfoShowPopover(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="productb" style={{ position: 'relative' }}>
      <span className="heart" title="Add to wishlist" style={{ position: 'absolute', top: 12, right: 12, zIndex: 2, fontSize: 22, background: '#fff', borderRadius: '50%', padding: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>♡</span>
      <img src={image} alt="" />
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
        </div>
      <div className="eco_details">
        <div className="carbon_details">
          <img src="../images/co2badge.png" alt="" className="eco_image"></img>
          <p className="eco_text">{carbon_red}% Less Carbon Emission</p>
        </div>
        <div className="badge_details">
          <div className="popover_trigger">
            <img
              id="badgeToTrack"
              src={badge_photo}
              alt=""
              className="eco_image"
              onMouseEnter={showBadgePopover}
              onMouseLeave={hideBadgePopover}
            ></img>
            {isBadgePopoverVisible && (
              <div className="popover_content">
                <div className="content">
                  <img
                    src={badge_popover}
                    className="popover_content_image"
                  ></img>
                </div>
              </div>
            )}
            {showInfoPopover && id === "875615" && !dontShowAgain && (
              <div className="badge_info_popover_content_nav">
                <div className="badge_info_triangle"></div>
                <p>Try hovering over the badge to see further details.</p>
                <button onClick={closeInfoPopover} className="got_it">
                  Got It
                </button>
              </div>
            )}
          </div>
          <p className="eco_text">Eco-Friendly Badge</p>
        </div>
      </div>
        <div className="product__actions" style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <button className="normal" onClick={addToBasket}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
