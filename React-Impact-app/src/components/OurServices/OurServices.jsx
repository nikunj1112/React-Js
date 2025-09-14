import React from "react";
import "./OurServices.css";  


export default function OurServices() {
  const services = [
    {
      icon: "bi-activity",
      title: "Nesciunt Mete",
      desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore.",
    },
    {
      icon: "bi-broadcast",
      title: "Eosle Commodi",
      desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    },
    {
      icon: "bi-easel",
      title: "Ledo Markt",
      desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      icon: "bi-bounding-box-circles",
      title: "Asperiores Commodit",
      desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      icon: "bi-calendar4-week",
      title: "Velit Doloremque",
      desc: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    },
    {
      icon: "bi-chat-square-text",
      title: "Dolori Architecto",
      desc: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ];

  return (
    <div
      className="container-fluid pt-5 pb-5"
      style={{ backgroundColor: "rgba(237, 237, 237, 0.736)" }}
    >
      <h1 className="text-center text-dark fw-bold">Our Services</h1>
      <p className="text-center text-dark">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="container mt-4">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card h-100 p-3 shadow-sm">
                <div className="card-body text-center">
                  <i className={`bi ${service.icon} text-success fs-1`} />
                  <h3 className="card-title mt-3">{service.title}</h3>
                  <p className="card-text">{service.desc}</p>
                  <a href="#" className="stretched-link text-dark fw-semibold">
                    Read more <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
