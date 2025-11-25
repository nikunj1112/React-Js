import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";


export default function Cart({ CartItem, onAdd, onRemove }) {
  const totalPrice = CartItem.reduce((a, c) => a + c.price * c.qty, 0);
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <div className="container mt-4">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>

      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        {CartItem.length === 0 ? (
          <p className="empty-msg">Your cart is empty 🛒</p>
        ) : (
          <div>
            {CartItem.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image[0]} alt={item.name} className="cart-img" />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} <span className="unit">{item.unit}</span></p>

                  {/* Quantity buttons */}
                  <div className="cart-actions">
                    <button onClick={() => onRemove(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onAdd(item)}>+</button>
                  </div>
                </div>

                <div className="cart-subtotal">
                  ₹{item.price * item.qty}
                </div>
              </div>
            ))}

            <hr />
            <div className="cart-total">
              <h3>Total: ₹{totalPrice}</h3>
              <button className="btn-checkout">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
