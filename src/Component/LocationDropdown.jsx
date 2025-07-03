import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const LocationDropdown = ({
  locationTitle = "Pickup or delivery?",
  locationDetail = "Sacramento, 95829 • Sacramento Supercenter",
  address = "Sacramento, CA 95829",
  storeName = "Sacramento Supercenter",
  storeAddress = "8915 GERBER ROAD, Sacramento, CA 95829",
  backgroundColor = "#0153E3"
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div
      className="walmart-header__location"
      ref={dropdownRef}
      onClick={() => setDropdownOpen((open) => !open)}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <img src="public/images/location.png" alt="location" className="walmart-header__location-icon" />
      <div>
        <div className="walmart-header__location-title">{locationTitle}</div>
        <div className="walmart-header__location-detail">{locationDetail}</div>
      </div>
      <span className="walmart-header__dropdown">∨</span>
      {dropdownOpen && (
        <div className="walmart-location-dropdown" style={{
          position: "absolute",
          top: "100%",
          left: 0,
          background: backgroundColor,
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          padding: 24,
          zIndex: 1000,
          width: 350,
          marginTop: 12
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
            <img src="public/images/location.png" alt="" style={{ width: 36, marginRight: 12 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#fff' }}>{locationTitle}</div>
              <div style={{ color: "#fff", fontSize: 14 }}>{locationDetail}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ textAlign: "center" }}>
              <img src="public/images/box.png" alt="Shipping" style={{ width: 48, marginBottom: 4 }} />
              <div style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>Shipping</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="public/images/cart_icon.png" alt="Pickup" style={{ width: 48, marginBottom: 4 }} />
              <div style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>Pickup</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src="public/images/bag_eco.jpg" alt="Delivery" style={{ width: 48, marginBottom: 4, borderRadius: 8 }} />
              <div style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>Delivery</div>
            </div>
          </div>
          <div style={{ background: "#f7f7f7", borderRadius: 12, padding: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 18, marginRight: 8, color: '#000' }}>📍</span>
              <span style={{ fontWeight: 600, color: '#000' }}>Add an address for shipping and delivery</span>
            </div>
            <div style={{ color: "#000", fontSize: 14, marginBottom: 8 }}>{address}</div>
            <button style={{
              width: "100%",
              background: backgroundColor,
              color: "#fff",
              border: "none",
              borderRadius: 24,
              padding: "10px 0",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer"
            }}>Add address</button>
          </div>
          <div style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 12,
            display: "flex",
            alignItems: "center"
          }}>
            <span style={{
              background: "#f7f7f7",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12
            }}>🏬</span>
            <div>
              <div style={{ fontWeight: 700, color: '#000' }}>{storeName}</div>
              <div style={{ color: "#000", fontSize: 14 }}>{storeAddress}</div>
            </div>
            <span style={{ marginLeft: "auto", fontSize: 22, color: "#0153E3" }}>›</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown; 