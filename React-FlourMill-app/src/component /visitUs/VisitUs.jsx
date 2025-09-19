import React from "react";

export default function VisitUs() {
  return (
    <>
      {/* Navbar */}
      {/* <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#eadaab" }}>
        <div className="container">
          <a className="navbar-brand text" href="#">
            Laxmi Flour Mill
          </a>
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
          <div className="collapse navbar-collapse navbar-light" id="menu">
            <ul className="navbar-nav w-100 d-flex justify-content-center">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }} href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }} href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }} href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }} href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }} href="/visit">
                  Visit Us
                </a>
              </li>
            </ul>
            <button
              className="btn"
              style={{ backgroundColor: "#f14849", color: "black", width: 120 }}
              type="submit"
            >
              <i className="bi bi-telephone-inbound" /> Call Now
            </button>
          </div>
        </div>
      </nav> */}

      {/* <Navbar /> */}

      {/* Breadcrumb */}
      <div className="container mt-4">
        <span className="fs-3">Visit Us</span>
        <p>
          <span style={{ color: "#f14849" }}>Home /</span> <small>visit us</small>
        </p>
      </div>

      {/* Visit Our Location */}
      <div className="container mb-5 mt-5">
        <h2 className="text-center mb-1" style={{ color: "#f14849" }}>
          Visit Our Location
        </h2>
        <p className="text-center">Let us serve you the best</p>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4248502144687!2d72.86372318601941!3d21.17527533249432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffbffa131a1%3A0xe60ed1b6225d5800!2sShree%20Laxmi%20Flour%20Mill!5e0!3m2!1sen!2sin!4v1732458288993!5m2!1sen!2sin"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen={true}
              className="mt-3"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h5 className="mt-5 pt-5 mb-0">Contact</h5>
              <p className="mb-0">Name: Rana Hasmukhbhai</p>
              <p className="mb-2">Phone: +91 9327025104</p>
              <button
                className="btn"
                style={{ backgroundColor: "#f14849", color: "black" }}
              >
                <i className="bi bi-telephone-inbound" /> Call Now
              </button>
            </div>

            <div>
              <h5 className="mt-5">Our Address</h5>
              <p>225, Godadara Naher Rd, Bhaktinagar Society, Godadara, Surat, Gujarat 394210</p>
            </div>

            <div>
              <h5 className="mb-1 mt-5">Hours</h5>
              <p className="mb-0">Sunday - Saturday: 9am - 9:30pm</p>
              <p>Thursday: 9am - 1pm</p>
            </div>
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
