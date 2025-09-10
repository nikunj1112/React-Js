import React from 'react'

export default function AboutContent() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-12 col-sm-12">
        <img
          src="https://bootstrapmade.com/content/demo/Impact/assets/img/stats-img.svg"
          width="100%"
          alt=""
        />
      </div>
      <div className="col-lg-7 col-md-12 col-sm-12">
        <div className="row d-flex justify-content-evenly p-5">
          <div className="col-lg-5">
            <h1 className="fw-bold pb-5 pt-3 ">
              <i className="bi bi-emoji-smile fs-1 text-success" /> 232 <br />
              <p style={{ fontSize: 15, color: "rgb(111, 109, 109)" }}>
                Happy Clients consequuntur quae
              </p>
            </h1>
            <h1 className="fw-bold pb-5 ">
              <i className="bi bi-headset fs-1 text-success" />
              1453 <br />
              <p style={{ fontSize: 15, color: "rgb(111, 109, 109)" }}>
                Hours Of Support aut commodi quaerat
              </p>
            </h1>
          </div>
          <div className="col-lg-5 ">
            <h1 className=" fw-bold pb-5 pt-3">
              <i className="bi bi-journal-richtext fs-1 text-success" />
              521 <br />
              <p style={{ fontSize: 15, color: "rgb(111, 109, 109)" }}>
                {" "}
                Projects adipisci atque cum quia aut
              </p>
            </h1>
            <h1 className="fw-bold pb-5">
              <i className="bi bi-people fs-1 text-success" />
              32 <br />
              <p style={{ fontSize: 15, color: "rgb(111, 109, 109)" }}>
                Hard Workers rerum asperiores dolor
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
