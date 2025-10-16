import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateStatus.css";

export default function UpdateStatus() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // 🟢 Load orders from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // 🔄 Update order status
  const updateStatus = (index, newStatus) => {
    setOrders((prevOrders) => {
      const updated = [...prevOrders];
      updated[index] = { ...updated[index], status: newStatus };
      localStorage.setItem("orders", JSON.stringify(updated));
      return updated;
    });
  };

  // ❌ Remove completed order
  const removeOrder = (index) => {
    const updated = orders.filter((_, i) => i !== index);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // ✏️ Navigate to Modify Order page
  const handleModify = (order) => {
    localStorage.setItem("modifyOrder", JSON.stringify(order));
    navigate("/dashboard/modify-order");
  };

  return (
    <div className="update-status-wrapper">
      {/* 🔹 Header (Fixed) */}
      <div className="status-header">
        <h2 className="status-title">📋 Order Status Dashboard</h2>
        <p className="status-subtitle">
          Track, modify, and complete customer orders in real-time.
        </p>
      </div>

      {/* 🔹 Scrollable Order Cards Section */}
      <div className="order-scroll-container">
        {orders.length === 0 ? (
          <p className="no-orders">No active orders yet.</p>
        ) : (
          <div className="order-list">
            {orders.map((order, index) => (
              <div
                key={index}
                className={`order-card ${
                  order.status === "Completed" ? "completed-card" : ""
                }`}
              >
                {/* 🧾 Order Header */}
                <div className="order-header">
                  <h4>Order #{index + 1}</h4>
                  <span
                    className={`status-badge ${
                      order.status?.toLowerCase().replace(" ", "-") || "pending"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* 👤 Customer Details */}
                <div className="order-details">
                  <p>
                    <strong>👤 Customer:</strong>{" "}
                    {order.customerInfo?.customerName || "N/A"}
                  </p>
                  <p>
                    <strong>📞 Phone:</strong>{" "}
                    {order.customerInfo?.phone || "N/A"}
                  </p>
                  <p>
                    <strong>🪑 Table:</strong>{" "}
                    {order.customerInfo?.tableNo || "N/A"}
                  </p>
                  {order.customerInfo?.specialRequest && (
                    <p>
                      <strong>📝 Request:</strong>{" "}
                      {order.customerInfo.specialRequest}
                    </p>
                  )}
                  <p>
                    <strong>⏰ Time:</strong> {order.time}
                  </p>
                </div>

                {/* 🍽 Ordered Items */}
                <div className="order-items">
                  <h5>Ordered Items</h5>
                  <ul>
                    {order.orderItems.map((item, i) => (
                      <li key={i}>
                        {item.food_name} × {item.qty} = ₹
                        {item.price * item.qty}
                      </li>
                    ))}
                  </ul>
                  <p className="order-total">💰 Total: ₹{order.total}</p>
                </div>

                {/* 🔄 Status Buttons */}
                <div className="status-buttons">
                  {["Pending", "In Progress", "Served", "Completed"].map(
                    (s) => (
                      <button
                        key={s}
                        className={`status-btn ${
                          order.status === s ? "active" : ""
                        }`}
                        onClick={() => updateStatus(index, s)}
                      >
                        {s}
                      </button>
                    )
                  )}
                </div>

                {/* ✏️ Modify + 🗑 Remove */}
                {order.status === "Completed" && (
                  <div className="modify-remove">
                    <button
                      className="modify-btn"
                      onClick={() => handleModify(order)}
                    >
                      ✏️ Modify
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => removeOrder(index)}
                    >
                      🗑 Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
