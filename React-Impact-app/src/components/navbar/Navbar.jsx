import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  return (
    <div className="sticky-top">
      <div className="line">
        <div className="a text-light">
          <p><i className="bi bi-envelope"></i> contact@example.com</p>
          <p><i className="bi bi-phone"></i> +1 5589 55488 55</p>
        </div>
        <div className="b text-light">
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#008374" }}>
        <div className="container">
          <a href="/" className="navbar-brand fs-1 fw-bold text-light">Impact</a>
          <button className="navbar-toggler border-light outline-light border-2 navbar-dark"
            type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar-light" id="menu">
            <ul className="navbar-nav w-100 fw-bold d-flex justify-content-end text-center">
              {["Home","About","Services","Portfolio","Team","Blog","Contact"].map((item,index)=>(
                <li key={index} className="nav-item pe-2">
                  <a href="#" className="nav-link text-light">{item}</a>
                </li>
              ))}
              <li className="nav-item dropdown pe-2">
                <a href="/" className="nav-link text-light dropdown-toggle" data-bs-toggle="dropdown">Dropdown</a>
                <ul className="dropdown-menu text-center w-75 m-auto">
                  {["Dropdown 1","Deep Dropdown","Dropdown 2","Dropdown 3","Dropdown 4"].map((d,i)=>(
                    <li key={i}><a href="#" className="dropdown-item py-2">{d}</a></li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
