import React from "react";
import "./AboutPic.css";


export default function AboutPic() {
  return (
    <div
      className="call-to-action d-flex align-items-center text-center text-light"
      style={{
        backgroundImage:
          "url('https://bootstrapmade.com/content/demo/Impact/assets/img/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative">
        <h1 className="fw-bold">Call To Action</h1>
        <p className="w-75 m-auto pb-3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a className="btn btn-outline-light px-4 py-2 fw-bold" href="#">
          Call to Action
        </a>
      </div>
    </div>
  );
}
