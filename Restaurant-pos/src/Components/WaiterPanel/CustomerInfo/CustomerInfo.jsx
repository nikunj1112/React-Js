import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerInfo.css";
import "remixicon/fonts/remixicon.css";

export default function CustomerInfo() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [tableNo, setTableNo] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const customerData = {
      customerName,
      phone,
      tableNo,
      specialRequest,
      time: new Date().toLocaleString(),
    };

    // ✅ Save to localStorage
    localStorage.setItem("customerInfo", JSON.stringify(customerData));

    alert(`✅ Customer Added: ${customerName}`);

    // ✅ Redirect to TakeOrder page
    navigate("/dashboard/take-order");

    // Clear fields (optional)
    setCustomerName("");
    setPhone("");
    setTableNo("");
    setSpecialRequest("");
  };

  return (
    <div className="customer-info-page">
      {/* 🔱 Header Section */}
      <div className="customer-header">
        <h2 className="customer-title">Maharaja Palace - Customer Info</h2>
      </div>

      {/* 💫 Form Section */}
      <div className="customer-form-container">
        <form onSubmit={handleSubmit} className="customer-form">
          <h3 className="form-heading">
            <i className="ri-user-add-line"></i> Add Customer Details
          </h3>

          <div className="input-group">
            <label>Customer Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Table Number</label>
            <input
              type="number"
              placeholder="Enter table no"
              value={tableNo}
              onChange={(e) => setTableNo(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Special Request</label>
            <textarea
              placeholder="e.g., Less spicy, No onion, Extra cheese..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <i className="ri-save-line"></i> Save Customer
          </button>
        </form>

        {/* ✨ Preview Section */}
        <div className="preview-section">
          <h3 className="preview-heading">Customer Preview</h3>
          <div className="preview-box">
            <p><strong>Name:</strong> {customerName || "—"}</p>
            <p><strong>Phone:</strong> {phone || "—"}</p>
            <p><strong>Table No:</strong> {tableNo || "—"}</p>
            <p><strong>Request:</strong> {specialRequest || "—"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
