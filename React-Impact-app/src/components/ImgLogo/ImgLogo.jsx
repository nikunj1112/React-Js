import React from "react";
import "./ImgLogo.css";

export default function ImgLogo() {
  const logos = [
    { src: "https://bootstrapmade.com/content/demo/Impact/assets/img/clients/client-2.png", alt: "Client 2" },
    { src: "https://bootstrapmade.com/content/demo/Impact/assets/img/clients/client-3.png", alt: "Client 3" },
    { src: "https://bootstrapmade.com/content/demo/Impact/assets/img/clients/client-4.png", alt: "Client 4" },
    { src: "https://bootstrapmade.com/content/demo/Impact/assets/img/clients/client-5.png", alt: "Client 5" },
    { src: "https://bootstrapmade.com/content/demo/Impact/assets/img/clients/client-6.png", alt: "Client 6" },
    { src: "https://bootstrapmade.com/content/demo/Impact/assets/img/clients/client-1.png", alt: "Client 1" },
  ];

  return (
    <div className="container my-5 py-5">
      <div className="row text-center justify-content-center">
        {logos.map((logo, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={logo.src} alt={logo.alt} width="70%" />
          </div>
        ))}
      </div>
    </div>
  );
}
