import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

export default function Header() {
  return (
    <div className="sticky-top">
  
      <div className="d-flex justify-content-between align-items-center px-4 py-2" style={{ backgroundColor: "#006d63" }}>
        <div className="d-flex gap-4 text-light small">
          <p className="mb-0">
            <i className="bi bi-envelope me-2"></i> contact@example.com
          </p>
          <p className="mb-0">
            <i className="bi bi-phone me-2"></i> +1 5589 55488 55
          </p>
        </div>
        <div className="d-flex gap-3 text-light">
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
        </div>
      </div>

    
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#008374" }}>
        <div className="container">
          <a href="/" className="navbar-brand fs-1 fw-bold text-light">Impact</a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto fw-bold text-center">
              {["Home","About","Services","Portfolio","Team","Blog","Contact"].map((item,index)=>(
                <li key={index} className="nav-item pe-2">
                  <a href="#" className="nav-link text-light">{item}</a>
                </li>
              ))}
             
              <li className="nav-item dropdown pe-2">
                <a href="/" className="nav-link text-light dropdown-toggle" data-bs-toggle="dropdown">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  {["Dropdown 1","Deep Dropdown","Dropdown 2","Dropdown 3","Dropdown 4"].map((d,i)=>(
                    <li key={i}>
                      <a href="#" className="dropdown-item py-2">{d}</a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
