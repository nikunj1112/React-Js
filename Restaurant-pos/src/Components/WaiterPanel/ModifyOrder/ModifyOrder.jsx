import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModifyOrder.css";

export default function ModifyOrder() {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [updatedOrder, setUpdatedOrder] = useState(null);

  // ✅ Load the order to modify from localStorage
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("modifyOrder"));
    if (savedOrder) {
      setOrder(savedOrder);
      setUpdatedOrder(savedOrder);
    }
  }, []);

  // Example menu list
  const menuItems = [
    { name: "Paneer Tikka", price: 220 },
    { name: "Veg Spring Roll", price: 160 },
    { name: "Hara Bhara Kabab", price: 180 },
    { name: "Masala Dosa", price: 120 },
  ];

  // ✅ Add new item
  const handleAddItem = (item) => {
    setUpdatedOrder((prev) => ({
      ...prev,
      orderItems: [
        ...(prev.orderItems || []),
        { food_name: item.name, price: item.price, qty: 1 },
      ],
      total: (prev.total || 0) + item.price,
    }));
  };

  // ✅ Remove item
  const handleRemoveItem = (index) => {
    const removedItem = updatedOrder.orderItems[index];
    setUpdatedOrder((prev) => ({
      ...prev,
      orderItems: prev.orderItems.filter((_, i) => i !== index),
      total: prev.total - removedItem.price * removedItem.qty,
    }));
  };

  // ✅ Save updated order
  const handleSave = () => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Find the index of the modified order using time or customer name
    const updatedOrders = allOrders.map((o) =>
      o.time === order.time ? updatedOrder : o
    );

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("✅ Order updated successfully!");
    navigate("/dashboard/update-status");
  };

  if (!updatedOrder) return <p>Loading order...</p>;

  return (
    <div className="modify-order-page">
      <h2>🧾 Modify Order</h2>

      <div className="customer-info">
        <p><b>Customer:</b> {updatedOrder.customerInfo?.customerName}</p>
        <p><b>Phone:</b> {updatedOrder.customerInfo?.phone}</p>
        <p><b>Table:</b> {updatedOrder.customerInfo?.tableNo}</p>
      </div>

      <div className="ordered-items">
        <h3>🛍 Ordered Items</h3>
        {updatedOrder.orderItems.map((item, index) => (
          <div key={index} className="ordered-item">
            <span>
              {item.food_name} × {item.qty}
            </span>
            <span>₹{item.price * item.qty}</span>
            <button onClick={() => handleRemoveItem(index)}>❌</button>
          </div>
        ))}
        <p><strong>💰 Total: ₹{updatedOrder.total}</strong></p>
      </div>

      <div className="menu-items">
        <h3>🍽 Add More Items</h3>
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <button onClick={() => handleAddItem(item)}>➕ Add</button>
          </div>
        ))}
      </div>

      <div className="actions">
        <button className="save-btn" onClick={handleSave}>💾 Save Changes</button>
        <button className="cancel-btn" onClick={() => navigate(-1)}>↩ Back</button>
      </div>
    </div>
  );
}
