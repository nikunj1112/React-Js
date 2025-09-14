import React from "react";
import "./AboutContent.css";


export default function AboutContent() {
  const stats = [
    {
      icon: "bi bi-emoji-smile",
      number: 232,
      text: "Happy Clients consequuntur quae",
    },
    {
      icon: "bi bi-headset",
      number: 1453,
      text: "Hours Of Support aut commodi quaerat",
    },
    {
      icon: "bi bi-journal-richtext",
      number: 521,
      text: "Projects adipisci atque cum quia aut",
    },
    {
      icon: "bi bi-people",
      number: 32,
      text: "Hard Workers rerum asperiores dolor",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://bootstrapmade.com/content/demo/Impact/assets/img/stats-img.svg"
            alt="Statistics"
            className="img-fluid"
          />
        </div>

        {/* Right Stats */}
        <div className="col-lg-7 col-md-12">
          <div className="row text-center">
            {stats.map((item, index) => (
              <div key={index} className="col-6 mb-4">
                <i className={`${item.icon} fs-1 text-success`} />
                <h2 className="fw-bold">{item.number}</h2>
                <p style={{ fontSize: 15, color: "rgb(111, 109, 109)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
