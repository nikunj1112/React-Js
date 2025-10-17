import React from "react";
import { useSelector } from "react-redux";

export default function Orders() {
  const { orders } = useSelector((state) => state.restaurant);

  return (
    <div className="container py-4">
      <h1>Manager Panel - Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="list-group">
          {orders.map((order) => (
            <div key={order.id} className="list-group-item mb-3">
              <h5>Order ID: {order.id}</h5>
              <p>Customer: {order.customer.name}</p>
              <p>Table: {order.customer.table}</p>
              <p>Time: {order.time}</p>
             
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.food_name} x {item.quantity} - ₹{item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p>Total: ₹{order.total.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
