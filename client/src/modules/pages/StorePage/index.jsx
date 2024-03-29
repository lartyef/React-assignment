import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
  ]);
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity }]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setQuantity(1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePay = () => {
    // Handle payment process
  };

  return (
    <div>
      <h1>Shopping Web Application</h1>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="purchase-page">
          <h2>Purchase Page</h2>
          <h3>{selectedItem.name}</h3>
          <p>Price: ${selectedItem.price}</p>
          <div className="quantity-selector">
            <button onClick={handleDecreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
          <button onClick={handlePay}>Pay</button>
        </div>
      )}
      <div className="payment-page">
        <h2>Payment Page</h2>
        {/* Payment form */}
        <button>Validate Payment</button>
      </div>
    </div>
  );
};

export default App;
