import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Banner.css";


export default function Banner() {
  return (
    <div
      className="container-fluid box"
      style={{ backgroundColor: "#008374", marginBottom: "150px" }}
    >
      {/* Hero Row */}
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-lg-6 col-md-12 col-sm-10 p-5">
          <strong className="text-light display-4">Welcome to Impact</strong>
          <p className="text-light fs-6 w-75 mt-3">
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
            Eum quas beatae cumque eum quaerat.
          </p>
          <a
            className="btn rounded-pill btn-outline-light mt-3"
            href="#"
          >
            Get Started
          </a>
        </div>

        {/* Right Image Section */}
        <div className="col-lg-6 col-md-12 col-sm-12 text-center p-5">
          <img
            src="https://bootstrapmade.com/content/demo/Impact/assets/img/hero-img.svg"
            width="80%"
            alt="Hero Illustration"
          />
        </div>
      </div>

      {/* Features Row */}
      <div className="container mt-4">
        <div className="row justify-content-evenly">
          {[
            { icon: "bi-easel", title: "Lorem Ipsum" },
            { icon: "bi-gem", title: "Sed ut perspiciatis" },
            { icon: "bi-geo-alt", title: "Magni Dolores" },
            { icon: "bi-command", title: "Nemo Enim" },
          ].map((item, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-5 col-sm-8 m-auto mb-4 rounded-3 text-center p-4 box1"
              style={{
                height: 200,
                backgroundColor: "#008374",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <i className={`bi ${item.icon} fs-1 text-light`} />
              <br />
              <strong className="text-light fs-4">{item.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
