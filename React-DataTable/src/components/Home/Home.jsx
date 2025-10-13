import React, { useState } from "react";
import { ordersData } from "../../assets/Data";
import "./Home.css";

export default function OrderFilter() {
  const [orderId, setOrderId] = useState("");
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [payment, setPayment] = useState("");
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("");

  const [filteredData, setFilteredData] = useState([...ordersData]);


  const handleFilter = () => {
    let data = [...ordersData];
  
    if (orderId) {
      const cleanId = orderId.replace("#", "");
      data = data.filter((d) => d.id.replace("#", "") === cleanId);
    }
    if (customer) {
      data = data.filter((d) =>
        d.customer.toLowerCase().includes(customer.toLowerCase())
      );
    }
    if (phone) {
      data = data.filter((d) => d.phone.includes(phone));
    }
    if (product) {
      data = data.filter((d) =>
        d.product.toLowerCase().includes(product.toLowerCase())
      );
    }
    if (payment) {
      data = data.filter((d) => d.payment === payment);
    }
    if (status && status !== "All") {
      data = data.filter((d) => d.status === status);
    }
    if (date) {
      data = data.filter((d) => d.date === date);
    }
  
    setFilteredData(data);
  };
  

  // Clear filters
  const handleClear = () => {
    setOrderId("");
    setCustomer("");
    setPhone("");
    setProduct("");
    setPayment("");
    setStatus("All");
    setDate("");
    setFilteredData([...ordersData]);
  };

  // Status class
  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "status-new";
      case "Completed":
        return "status-completed";
      case "Pending":
        return "status-pending";
      case "Canceled":
        return "status-canceled";
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <div className="name">
        <h2>📦Orders</h2>
        <div className="name1">
          <img
            src="https://t3.ftcdn.net/jpg/02/25/10/36/360_F_225103684_9opc6FzD29B5K2YMXlOTR1yuSQQemA4m.jpg"
            alt=""
          />
          <p>Nikünj Ränä</p>
        </div>
      </div>


      <div className="filters">
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <select value={payment} onChange={(e) => setPayment(e.target.value)}>
          <option value="">All Payments</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Not paid">Not Paid</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="New">New</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Canceled">Canceled</option>
        </select>

        <div className="actions">
          <button className="btn btn-primary" onClick={handleFilter}>
            Search
          </button>
          <button
            className="btn btn-outline-primary border border-primary"
            onClick={handleClear}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Product</th>
            <th>Price</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td className="customer">{order.customer}</td>
                <td>{order.phone}</td>
                <td>{order.product}</td>
                <td>£{order.price}</td>
                <td>{order.payment}</td>
                <td>
                  <span className={getStatusClass(order.status)}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-results">
                No matching orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
