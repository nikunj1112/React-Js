import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Product.css";

export default function Products({ products, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState({});
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    onAddToCart(item);   // Add to cart
    navigate("/cart");   // Redirect to Cart page
  };

  const handleView = (item) => {
    navigate(`/product/${item.id}`, { state: item }); // ✅ state ke sath redirect
  };

  return (

    <>
    <div className="products-container container">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={selectedImage[item.id] || item.image[0]}
              alt={item.name}
              className="product-image"
              onMouseEnter={() =>
                setSelectedImage((prev) => ({ ...prev, [item.id]: item.image[1] }))
              }
              onMouseLeave={() =>
                setSelectedImage((prev) => ({ ...prev, [item.id]: item.image[0] }))
              }
            />
            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-desc">{item.description}</p>
              <p className="product-price">
                ₹{item.price} <span className="unit">{item.unit}</span>
              </p>
              <div className="btn-group">
                <button 
                  className="btn-buy"
                  onClick={() => handleBuyNow(item)} 
                >
                  Buy Now
                </button>
                <button 
                  className="btn-view"
                  onClick={() => handleView(item)} 
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



      {/* Footer */}
      <div className="container-fluid" style={{ backgroundColor: "#f14849" }}>
        <div className="container mb-4">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <p style={{ lineHeight: 4, fontSize: 15 }} className="mb-0 text-dark">
                © 2024 Laxmi Flour Mill. All Rights Reserved
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 text-end">
              <ul className="navbar-nav d-flex flex-row justify-content-end">
                <li className="nav-item">
                  <a className="nav-link pe-3 text-dark" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      </>
  );
}
