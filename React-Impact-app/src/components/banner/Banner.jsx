import React from 'react'

export default function Banner() {
  return (
    <div
    className="container-fliud box "
    style={{ backgroundColor: "#008374", marginBottom: 150 }}
  >
    <div className="row ">
      <div className="col-lg-6 col-md-12 col-sm-10 nikunj ">
        <strong className="text-light" style={{ fontSize: 55 }}>
          Welcome to Impact
        </strong>
        <p className="text-light fs-6 w-75">
          Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
          Eum quas beatae cumque eum quaerat.
        </p>
        <a
          className="btn rounded-pill btn-outline-light"
          style={{ backgroundColor: "transparent", color: "white" }}
          href="#"
        >
          Get Started
        </a>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 m-aut   p-5">
        <img
          src="https://bootstrapmade.com/content/demo/Impact/assets/img/hero-img.svg"
          width="80%"
          alt=""
        />
      </div>
    </div>
    <div className="container mt-4  ">
      <div className="row d-flex justify-content-evenly  ">
        <div
          className="col-lg-2 col-md-5 col-sm-8 m-auto mb-4   rounded-3 text-center   p-4 box1"
          style={{
            height: 200,
            backgroundColor: "#008374",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
          }}
        >
          <i className="bi bi-easel fs-1 text-light" />
          <br />
          <strong className="text-light fs-4"> Lorem Ipsum</strong>
        </div>
        <div
          className="col-lg-2 col-md-5 col-sm-8 m-auto mb-4 rounded-3 text-center  p-4 box1"
          style={{
            height: 200,
            backgroundColor: "#008374",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
          }}
        >
          <i className="bi bi-gem fs-1 text-light" />
          <br />
          <strong className="text-light fs-4">Sed ut perspiciatis</strong>
        </div>
        <div
          className="col-lg-2 col-md-5 col-sm-8 m-auto mb-4  rounded-3 text-center m-4 p-4 box1"
          style={{
            height: 200,
            backgroundColor: "#008374",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
          }}
        >
          <i className="bi bi-geo-alt fs-1 text-light" />
          <br />
          <strong className="text-light fs-4">Magni Dolores</strong>
        </div>
        <div
          className="col-lg-2 col-md-5 col-sm-8 m-auto mb-4  rounded-3 text-center m-4 p-4 box1"
          style={{
            height: 200,
            backgroundColor: "#008374",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
          }}
        >
          <i className="bi bi-command fs-1 text-light " />
          <br />
          <strong className="text-light fs-4">Nemo Enim</strong>
        </div>
      </div>
    </div>
  </div>
  
  )
}
