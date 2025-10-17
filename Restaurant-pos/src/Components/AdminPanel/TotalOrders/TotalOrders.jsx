import React, { useEffect, useState } from "react";
import "./TotalOrders.css";

export default function TotalOrders() {
  const [orders, setOrders] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    // 🟢 Fetch logged-in employee info
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setCurrentEmployee(loggedInUser);

    // 🟢 Fetch all orders from localStorage
    const allOrders = JSON.parse(localStorage.getItem("history")) || [];

    // 🟢 Filter orders by employee (if available)
    if (loggedInUser) {
      const employeeOrders = allOrders.filter(
        (order) => order.employeeEmail === loggedInUser.email
      );
      setOrders(employeeOrders.reverse());
    } else {
      setOrders(allOrders.reverse());
    }
  }, []);

  return (
    <div className="totalorders-wrapper">
      <div className="totalorders-header">
        <h2 className="totalorders-title">🧾 Total Orders</h2>
        {currentEmployee && (
          <div className="employee-info">
            <p>
              <strong>Employee:</strong> {currentEmployee.name}
            </p>
            <p>
              <strong>Email:</strong> {currentEmployee.email}
            </p>
          </div>
        )}
      </div>

      {orders.length === 0 ? (
        <p className="no-orders">No orders found for this employee.</p>
      ) : (
        <div className="totalorders-grid">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <h3 className="order-title">🍽 Maharaja Palace</h3>

              <div className="order-meta">
                <p><b>Customer:</b> {order.customerInfo?.customerName}</p>
                <p><b>Table:</b> {order.customerInfo?.tableNo}</p>
                <p><b>Payment:</b> {order.paymentMethod}</p>
                <p><b>Date:</b> {order.date}</p>
                {order.employeeEmail && (
                  <p><b>Employee:</b> {order.employeeEmail}</p>
                )}
              </div>

              <table className="order-table">
                <thead>
                  <tr>
                    <th>Dish</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item, i) => (
                    <tr key={i}>
                      <td>{item.food_name}</td>
                      <td>{item.qty}</td>
                      <td>₹{item.price * item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h4 className="order-total">Total: ₹{order.total}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
