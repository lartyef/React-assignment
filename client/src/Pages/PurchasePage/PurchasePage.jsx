import React, { useState } from 'react';
import './PurchasePage.css'; // Import CSS file for styling

const PurchasePage = ({ cartItems }) => {
  const [quantities, setQuantities] = useState({});

  // Function to handle quantity changes for an item
  const handleQuantityChange = (itemId, quantity) => {
    setQuantities({ ...quantities, [itemId]: quantity });
  };

  // Function to calculate the total price for an item based on its quantity
  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  // Function to calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemTotal = calculateItemTotal(item.price, quantities[item.id] || 0);
      totalPrice += itemTotal;
    });
    return totalPrice;
  };

  return (
    <div className="purchase-page">
      <h2>Your Purchase</h2>
      <div className="item-list">
        {cartItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${item.id}`}
                value={quantities[item.id] || 0}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min={0}
              />
              <p>Total: ${calculateItemTotal(item.price, quantities[item.id] || 0)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>
      <button className="pay-button">Pay</button>
    </div>
  );
};

export default PurchasePage;
