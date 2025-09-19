import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./About.css";

export default function About() {
  return (
    <>
      {/* Navbar */}
      {/* <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#eadaab" }}>
        <div className="container">
          <a className="navbar-brand" href="#">Laxmi Flour Mill</a>
          <button
            className="navbar-toggler"
            style={{ border: "3px solid #f14849", color: "#f14849" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon">
              <i className="bi bi-list" style={{ lineHeight: 32 }} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav w-100 d-flex justify-content-center">
              <li className="nav-item"><a className="nav-link" style={{ color: "black" }} href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: "black" }} href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: "black" }} href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: "black" }} href="#">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: "black" }} href="#">Visit Us</a></li>
            </ul>
            <button className="btn" style={{ backgroundColor: "#f14849", color: "black", width: 120 }} type="submit">
              <i className="bi bi-telephone-inbound" /> Call Now
            </button>
          </div>
        </div>
      </nav> */}

      {/* Breadcrumb */}
      <div className="container mt-4">
        <span className="fs-3">About</span>
        <p>
          <span style={{ color: "#f14849" }}>Home /</span> <small>about</small>
        </p>
      </div>

      {/* About Section */}
      <div className="container mt-5 mb-5 p-5" style={{ backgroundColor: "#eadaab", borderRadius: 5 }}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 style={{ color: "#f14849" }}>About Us</h2>
            <p style={{ color: "black", width: "90%", textAlign: "justify" }}>
            Shree-Laxmi flour mill provides our customers with the highest quality products and services. We offer a wide
          variety of flours and spices to choose from, and we are always happy to help our customers find the perfect
          products for their needs. We are committed to providing our customers with the best possible experience. We
          offer competitive prices, fast shipping, and excellent customer service. We are also happy to answer any
          questions that our customers may have about our products or services. If you are looking for a flour and
          spices service business that can provide you with the highest quality products and services, then we are the
          company for you. We look forward to serving you...!
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              src="https://linkkit-consultants.hk/wp-content/uploads/2023/06/lycs-architecture-U2BI3GMnSSE-unsplash-1170x694.jpg"
              style={{ width: "100%", height: "auto", borderRadius: 6 }}
              alt="About Us"
            />
          </div>
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
