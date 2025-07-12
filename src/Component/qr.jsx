import React, { useEffect, useState } from 'react';
import '../Css/qr.css';
import { useStateValue } from '../StateProvider';

function QR() {
  const [{ history, basket }, dispatch] = useStateValue();
  const [orderHistory, setOrderHistory] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    // Update local state when history changes
    const reversedHistory = [...history].reverse();
    setOrderHistory(reversedHistory);
    
    // Calculate total spent
    const total = reversedHistory.reduce((sum, item) => sum + item.price, 0);
    setTotalSpent(total);
    
    console.log('History updated:', history);
    console.log('Reversed history:', reversedHistory);
    console.log('Total spent:', total);
  }, [history]);

  const handlePrintBill = () => {
    window.print();
  };

  const addTestOrder = () => {
    const testItems = [
      {
        id: `test-${Date.now()}-1`,
        title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)",
        price: 1099.00,
        rating: 5,
        image: "../images/tablet.jpg",
        badge_id: 0
      },
      {
        id: `test-${Date.now()}-2`,
        title: "Eco-Friendly Bamboo Straw Set",
        price: 12.99,
        rating: 4,
        image: "../images/straw_eco.jpg",
        badge_id: 1
      }
    ];
    
    dispatch({
      type: "ADD_TO_HISTORY",
      items: testItems,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'status-delivered';
      case 'In Transit':
        return 'status-transit';
      case 'Processing':
        return 'status-processing';
      default:
        return 'status-default';
    }
  };

  return (
    <div className="qr-container">
      <div className="qr-header">
        <h1>Order History & Invoice</h1>
        <p>Your previous orders and purchase history</p>
      </div>

      <div className="qr-content">
        <div className="qr-summary">
          <div className="summary-card">
            <h3>Total Orders</h3>
            <p className="summary-number">{orderHistory.length}</p>
          </div>
          <div className="summary-card">
            <h3>Total Spent</h3>
            <p className="summary-number">${totalSpent.toFixed(2)}</p>
          </div>
          <div className="summary-card">
            <h3>Items Purchased</h3>
            <p className="summary-number">{orderHistory.length}</p>
          </div>
        </div>

        {orderHistory.length === 0 ? (
          <div className="no-orders">
            <h2>No Orders Found</h2>
            <p>You haven't placed any orders yet. Start shopping to see your order history here.</p>
            <div className="debug-info">
              <p><strong>Debug Info:</strong></p>
              <p>History length: {history.length}</p>
              <p>Basket length: {basket.length}</p>
              <p>History data: {JSON.stringify(history, null, 2)}</p>
              <button onClick={addTestOrder} className="test-btn">
                Add Test Order
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="orders-table-container">
              <h2>Order History</h2>
              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Rating</th>
                      <th>Eco-Friendly</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((item, index) => (
                      <tr key={`${item.id}-${index}`}>
                        <td className="order-id">#{index + 1}</td>
                        <td className="order-product">
                          <div className="product-info">
                            <img src={item.image} alt={item.title} className="product-image" />
                            <div className="product-details">
                              <span className="product-title">{item.title}</span>
                              <span className="product-id">ID: {item.id}</span>
                            </div>
                          </div>
                        </td>
                        <td className="order-price">${item.price}</td>
                        <td className="order-rating">
                          {Array(item.rating)
                            .fill()
                            .map((_, i) => (
                              <span key={i} className="star">⭐</span>
                            ))}
                        </td>
                        <td className="order-eco">
                          {item.badge_id > 0 ? (
                            <span className="eco-badge">Eco-Friendly</span>
                          ) : (
                            <span className="regular-badge">Regular</span>
                          )}
                        </td>
                        <td className="order-actions">
                          <button className="action-btn return-btn">Return Item</button>
                          {item.badge_id > 0 && (
                            <button className="action-btn feedback-btn">Feedback</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="invoice-summary">
              <div className="invoice-details">
                <h3>Invoice Summary</h3>
                <div className="invoice-row">
                  <span>Total Items:</span>
                  <span>{orderHistory.length}</span>
                </div>
                <div className="invoice-row">
                  <span>Subtotal:</span>
                  <span>${totalSpent.toFixed(2)}</span>
                </div>
                <div className="invoice-row">
                  <span>Tax:</span>
                  <span>${(totalSpent * 0.08).toFixed(2)}</span>
                </div>
                <div className="invoice-row total">
                  <span>Total Amount:</span>
                  <span>${(totalSpent * 1.08).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="print-section">
                <button className="print-btn" onClick={handlePrintBill}>
                  🖨️ Print Invoice
                </button>
                <p className="print-note">Click to print your order history and invoice</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QR;
