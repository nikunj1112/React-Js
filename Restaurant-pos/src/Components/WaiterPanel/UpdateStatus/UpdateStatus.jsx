import React, { useState, useEffect } from "react";
import "./UpdateStatus.css";

export default function UpdateStatus() {
  const [orders, setOrders] = useState([]);

  // 🧾 Load from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // ⚙️ Auto cycle through statuses
  useEffect(() => {
    const statuses = ["Pending", "In Progress", "Served", "Completed"];

    const interval = setInterval(() => {
      setOrders((prev) =>
        prev.map((order) => {
          const currentIndex = statuses.indexOf(order.status);
          const nextIndex = (currentIndex + 1) % statuses.length;
          return { ...order, status: statuses[nextIndex] };
        })
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // 💾 Persist updated orders
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "#b7950b";
      case "In Progress": return "#a7892a";
      case "Served": return "#5c4a00";
      case "Completed": return "#4caf50";
      default: return "#444";
    }
  };

  return (
    <div className="update-status-page">
      <h1 className="page-title">🍽️ Active Orders & Table Status</h1>

      {orders.length === 0 ? (
        <p className="no-orders">No active orders yet.</p>
      ) : (
        <div className="table-grid">
          {orders.map((order, index) => (
            <div key={index} className="table-card">
              <h3>{order.customerInfo?.tableNo || order.tableId}</h3>
              <p><strong>Customer:</strong> {order.customerInfo?.customerName}</p>
              <p><strong>Total:</strong> ₹{order.total}</p>
              <p><strong>Time:</strong> {order.time}</p>

              <div className="status-display">
                <span
                  className="status-dot"
                  style={{ backgroundColor: getStatusColor(order.status) }}
                ></span>
                <p className="status-text" style={{ color: getStatusColor(order.status) }}>
                  {order.status}
                </p>
              </div>

              <details className="order-details">
                <summary>View Order Items</summary>
                <ul>
                  {order.orderItems.map((item, i) => (
                    <li key={i}>
                      {item.food_name} × {item.qty} — ₹{item.price * item.qty}
                    </li>
                  ))}
                </ul>
              </details>

              {order.status !== "Completed" ? (
                <button
                  className="update-btn"
                  onClick={() =>
                    setOrders((prev) =>
                      prev.map((o, i) =>
                        i === index
                          ? {
                              ...o,
                              status:
                                o.status === "Pending"
                                  ? "In Progress"
                                  : o.status === "In Progress"
                                  ? "Served"
                                  : "Completed",
                            }
                          : o
                      )
                    )
                  }
                >
                  Update Status
                </button>
              ) : (
                <p className="redirect-text">✅ Completed</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
