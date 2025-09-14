import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./AboutUs.css";


export default function AboutUs() {
  return (
    <div className="container-fluid py-5">
      <h1 className="text-center text-dark fw-bold">About Us</h1>
      <p className="text-center text-secondary">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="container mt-5">
        <div className="row g-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <h3 className="text-dark fw-bold mb-4">
              Voluptatem dignissimos provident laboris nisi ut aliquip ex ea
              commodo
            </h3>
            <img
              src="https://bootstrapmade.com/content/demo/Impact/assets/img/about.jpg"
              className="img-fluid rounded-3"
              alt="About section"
            />
            <p className="pt-4">
              Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
              quod nisi et. Placeat debitis quia recusandae odit et consequatur
              voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
            </p>
            <p>
              Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
              cupiditate nihil vitae quo officia vel. Blanditiis eligendi
              possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
              repellendus nobis tempore doloribus debitis explicabo similique
              sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <p className="fst-italic text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              <i className="bi bi-check-circle-fill text-success pe-2" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              <i className="bi bi-check-circle-fill text-success pe-2" />
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <p>
              <i className="bi bi-check-circle-fill text-success pe-2" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>

            <img
              src="https://bootstrapmade.com/content/demo/Impact/assets/img/about-2.jpg"
              className="img-fluid rounded-3 mt-3"
              alt="About details"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
