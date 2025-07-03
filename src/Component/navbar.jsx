import React, { useState, useRef, useEffect } from 'react';
import '../Css/navbar.css';
import { Link } from "react-router-dom";

const departmentList = [
  'Pharmacy, Health & Wellness',
  'Clothing, Shoes, & Accessories',
  'Baby & Kids',
  'Beauty',
  'Home, Garden & Tools',
  'Electronics',
  'Gaming & Entertainment',
  'Toys & Outdoor Play',
  'Paper & Cleaning',
  'Grocery',
  'Pets',
  'Personal Care',
];

const servicesList = [
  'Auto Care Center Services',
  'Pharmacy',
  'Vision & Optical',
  'Insurance & Benefits',
  'Registry, Lists, & Gifts',
  'Custom Cakes',
  'Photo Services',
  'Financial Services',
  'Protection, Home, & Tech',
  'Subscriptions',
  'Community & Giving',
  'Shopping, simplified',
];

const WalmartNavigationBar = () => {
  const [deptOpen, setDeptOpen] = useState(false);
  const deptRef = useRef(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (deptRef.current && !deptRef.current.contains(event.target)) {
        setDeptOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    if (deptOpen || servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [deptOpen, servicesOpen]);

  return (
    <nav className="walmart-nav">
      <ul className="walmart-nav-list">
        <li
          ref={deptRef}
          style={{ position: 'relative' }}
          onMouseEnter={() => setDeptOpen(true)}
          onMouseLeave={() => setDeptOpen(false)}
          onClick={() => setDeptOpen((open) => !open)}
          tabIndex={0}
        >
          <span className="walmart-nav-link">Departments ▼</span>
          {deptOpen && (
            <div style={{
              position: 'absolute',
              left: 0,
              top: '100%',
              background: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              borderRadius: 8,
              padding: '16px 24px',
              minWidth: 240,
              zIndex: 9999,
            }}>
              <div style={{ fontWeight: 700, marginBottom: 12 }}>All Departments</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {departmentList.map((dept) => (
                  <li key={dept} style={{
                    color: '#444',
                    fontSize: 16,
                    marginBottom: 10,
                    fontWeight: 400
                  }}>{dept}</li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li
          ref={servicesRef}
          style={{ position: 'relative' }}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onClick={() => setServicesOpen((open) => !open)}
          tabIndex={0}
        >
          <span className="walmart-nav-link">Services ▼</span>
          {servicesOpen && (
            <div style={{
              position: 'absolute',
              left: 0,
              top: '100%',
              background: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              borderRadius: 8,
              padding: '16px 24px',
              minWidth: 240,
              zIndex: 9999,
            }}>
              <div style={{ fontWeight: 700, marginBottom: 12 }}>All Services</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {servicesList.map((service) => (
                  <li key={service} style={{
                    color: '#444',
                    fontSize: 16,
                    marginBottom: 10,
                    fontWeight: 400
                  }}>{service}</li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="walmart-nav-divider" aria-hidden="true">|</li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/cp/get-it-fast/6545138" target="_blank" rel="noopener noreferrer">Get it Fast</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/cp/new-arrivals/2593086" target="_blank" rel="noopener noreferrer">New Arrivals</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/cp/pharmacy-delivery/7187181" target="_blank" rel="noopener noreferrer">Pharmacy Delivery</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/cp/dinner-tonight/5681029" target="_blank" rel="noopener noreferrer">Dinner Solutions</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/shop/summer-gathering" target="_blank" rel="noopener noreferrer">4th of July</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/cp/7689165" target="_blank" rel="noopener noreferrer">Trending</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/browse/swim-shop/5438_1229269" target="_blank" rel="noopener noreferrer">Swim Shop</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/my-items" target="_blank" rel="noopener noreferrer">My Items</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/cp/auto-services/1087266" target="_blank" rel="noopener noreferrer">Auto Service</a></li>
        <li><a className="walmart-nav-link" href="https://www.walmart.com/plus" target="_blank" rel="noopener noreferrer">Walmart+</a></li>
      </ul>
      <div className="walmart-nav-green-btn-container">
        <Link to="/green" style={{ textDecoration: 'none' }}>
          <button className="walmart-nav-green-btn">Greenovation Zone</button>
        </Link>
      </div>
    </nav>
  );
};

export default WalmartNavigationBar;