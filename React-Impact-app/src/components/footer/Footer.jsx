import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className=" text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">Impact</h5>
            <p>
              A108 Adam Street <br />
              New York, NY 535022 <br />
              United States
            </p>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55 <br />
              <strong>Email:</strong> info@example.com
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold">Useful Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Our Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Web Design</a></li>
              <li><a href="#" className="text-light text-decoration-none">Web Development</a></li>
              <li><a href="#" className="text-light text-decoration-none">Product Management</a></li>
              <li><a href="#" className="text-light text-decoration-none">Marketing</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} <strong>Impact</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
