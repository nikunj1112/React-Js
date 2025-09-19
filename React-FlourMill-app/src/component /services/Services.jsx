import React from 'react'

// Services list
const serviceList = [
  {
    img: "https://image.made-in-china.com/365f3j00wTukUcvsCrzK/Millet-Grinding-Unit-Wheat-Flour-Hulling-and-Milling-Machine.webp",
    title: "Wheat Flour Grinding",
    desc: "Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2023/9/346103435/ZE/BU/QN/195706343/besan-plant-machinery-500x500.png",
    title: "Gram Flour Grinding",
    desc: "Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber. Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.",
  },
  {
    img: "https://s.alicdn.com/@sc04/kf/H0f1a05f2127f485298268211a0f0f5d32/Widely-Popular-Jowar-Flour-Milling-Machine-Wheat-Flour-Milling-Machine-Stone-Gondor-Corn-Flour-Milling-Machine.jpg_300x300.jpg",
    title: "Jowar Flour Grinding",
    desc: "Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.",
    readMore: "Our jowar flour is also a good source of protein and fiber, making it a healthy choice for your family.",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2020/12/HT/HV/RU/21496757/kisan-diesel-engine-pump-sets-500x500.jpg",
    title: "Chilli Pounding",
    desc: "We specialize in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.",
    readMore: "We offer a variety of chili powder products, including mild, medium, and hot. We also offer custom blends to meet the specific needs of our customers.",
  },
  {
    img: "https://www.indiantradebird.com/content/images/thumb/638428320643460563_udad-papad-machine-500x500-(1).jpg",
    title: "Rice Papad",
    desc: "Our company produces high-quality rice papad that is made with the finest ingredients. We use traditional methods to make our papad, which gives it a unique flavor and texture. Our papad is also gluten-free and vegan.",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=39b845b841ed7d70bd5760f2511910cb3a8d52b0-10878270-images-thumbs&n=13",
    title: "Flavoured Spaghetti",
    desc: "Our speciality is Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients. Our flavors include: Mango, spinach.",
    readMore: "We offer a variety of rice papad flavors, including plain, salted, spicy, and flavored. We also offer a variety of sizes and shapes to choose from. Our papad is available in bulk or in individual packages.",
  },
];

export default function Services() {

  return (
    <>


      {/* Breadcrumb */}
      <div className="container mt-4"  >
        <span className="fs-3">Services</span>
        <p>
          <span style={{ color: "#f14849" }}>Home /</span> <small>services</small>
        </p>
      </div>



      <div className="container-fluid services-section py-5">
        <div className="container">
          {/* <h2 className="text-center fw-bold mb-5" style={{ color: "#f14849" }}>
      Our Services
    </h2> */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {serviceList.map((service, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 service-card shadow-sm border-0">
                  <img
                    src={service.img}
                    className="card-img-top service-img"
                    alt={service.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text text-muted">{service.desc}</p>

                    {service.readMore && (
                      <div className="dropdown">
                        <button
                          className="btn btn-link text-decoration-none p-0"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "#f14849", fontWeight: "500" }}
                        >
                          Read More <i className="bi bi-chevron-down"></i>
                        </button>
                        <ul className="dropdown-menu p-3 shadow">
                          <li>
                            <span className="text-muted">{service.readMore}</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
  )
}
