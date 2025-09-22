import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ backgroundColor: "#eadaab" }}
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold" style={{ color: " #f14849" , }}>
          Laxmi Flour Mill
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          style={{ border: "2px solid #f14849", color: "#f14849" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span>
            <i className="bi bi-list" style={{ fontSize: 24 }} />
          </span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item">
  <Link className="nav-link" to="/login">
    Login
  </Link>
</li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "black" }} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "black" }} to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "black" }} to="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "black" }} to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "black" }} to="/VisitUs">
                Visit Us
              </Link>
            </li>


          </ul>

          {/* Call + Cart (Right Side) */}
          <div className="d-flex align-items-center gap-2">
            <a
              href="tel:+917046850434"
              className="btn"
              style={{
                backgroundColor: "#f14849",
                color: "black",
                width: 130,
                fontWeight: "500",
              }}
            >
              <i className="bi bi-telephone-inbound me-1" /> Call Now
            </a>

    
            <Link to="/Cart " className="btn btn-dark position-relative">
            <i className="bi bi-cart-check-fill"></i>
       
        
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


