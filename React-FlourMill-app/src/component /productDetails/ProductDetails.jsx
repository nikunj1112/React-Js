import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { state: item } = useLocation(); // ✅ product data from navigate
  const navigate = useNavigate();

  if (!item) {
    return <p>No product found</p>;
  }

  return (
    <div className="product-details container ">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <div className="details-card mt-5">
        <img src={item.image[0]} alt={item.name} className="details-img" />
        <div className="details-info justify-content-center">
          <h2>{item.name}</h2>
          <p className="details-desc">{item.description}</p>
          <h3>Price: ₹{item.price} <span>{item.unit}</span></h3>
          <ul>
        
            <li><b>Category:</b> {item.category || "N/A"}</li>
          </ul>
         
        </div>
      </div>
    </div>
  );
}
