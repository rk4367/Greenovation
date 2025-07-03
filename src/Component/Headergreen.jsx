import React from "react";
import "../Css/Headergreen.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "./reducer";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationDropdown from './LocationDropdown';

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <header className="walmart-header walmart-header--green">
      <div className="walmart-header__left">
        <Link to="/">
          <img
            className="walmart-header__logo"
            src="public/images/walmart1.png"
            alt="walmart logo"
          />
        </Link>
        <LocationDropdown backgroundColor="#4a7352" />
      </div>
      <div className="walmart-header__search">
        <input className="walmart-header__searchInput" type="text" placeholder="Search everything at Walmart online and in store" />
        <button className="walmart-header__searchButton">
          <img src="../images/search_icon.png" alt="search" />
        </button>
      </div>
      <div className="walmart-header__right">
        <Link to="/orders" className="walmart-header__link">
          <div className="walmart-header__icon-text">
            <FavoriteBorderIcon className="walmart-header__icon-heart" fontSize="medium" />
            <div>
              <div className="walmart-header__small">Reorder</div>
              <div className="walmart-header__bold">My Items</div>
            </div>
          </div>
        </Link>
        <Link to="/dashboard" className="walmart-header__link">
          <div className="walmart-header__icon-text">
            <DashboardIcon className="walmart-header__icon-user" />
            <div>
              <div className="walmart-header__small">Your</div>
              <div className="walmart-header__bold">Dashboard</div>
            </div>
          </div>
        </Link>
        <Link to="/login" className="walmart-header__link">
          <div className="walmart-header__icon-text">
            <AccountCircleIcon className="walmart-header__icon-user" />
            <div>
              <div className="walmart-header__small">Sign In</div>
              <div className="walmart-header__bold">Account</div>
            </div>
          </div>
        </Link>
        <Link to="/checkout" className="walmart-header__cart">
          <img src="../images/cart_icon.png" alt="cart" className="walmart-header__cartIcon" />
          <div className="walmart-header__cart-info">
            <div className="walmart-header__cart-badge">{basket?.length || 0}</div>
            <div className="walmart-header__cart-price">${getBasketTotal(basket).toFixed(2)}</div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
