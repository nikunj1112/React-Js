// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Home.css";
// import icon1 from '../../assets/img/icon-1.png'
// import icon2 from '../../assets/img/icon-2.png'
// import icon3 from '../../assets/img/icon-3.png'
// import icon4 from '../../assets/img/icon-4.png'
// // import moduleName from '../../assets/img/'
// // import WhyUs from "../whyUs/WhyUs";
// // import Services from "../services/Services";
// // import AboutUs from "../aboutUs/AboutUs";
// import products from "../product/Product"; // Make sure you have this file
// import {products} from '../../json/'

// export default function Home() {
//   // Banner images
//   const images = [
//     "https://madein.md/files/news/la-cahul-s-a-deschis-o-fabrica-de-producere-a-fainii.jpg",
//     "https://avatars.mds.yandex.net/i?id=448166ee715baeb7e2dfdb89bcf376c5_l-5163423-images-thumbs&ref=rim&n=13&w=1200&h=753",
//     "https://schc09s2.blob.core.windows.net/cache/5/4/e/f/3/8/54ef38383e3bc5852bda8f2e681ac144d0716ade.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedImage, setSelectedImage] = useState({});

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const onAddToCart = (item) => {
//     console.log("Added to cart:", item);
//   };



//   function Products({ products, onAddToCart }) {
//     const [selectedImage, setSelectedImage] = useState({});
//     const navigate = useNavigate();

//     const handleBuyNow = (item) => {
//       onAddToCart(item);   // Add to cart
//       navigate("/cart");   // Redirect to Cart page
//     };

//     const handleView = (item) => {
//       navigate(`/product/${item.id}`, { state: item }); // ✅ state ke sath redirect
//     };
//   }




//   // Why Us points
//   const points = [
//     {
//       img : icon1 ,
//       title: "Latest Milling Machinery",
//     },
//     {
//       img: icon2,
//       title: "Reasonable Rates",
//     },
//     {
//       img: icon3,
//       title: "Time Efficiency",
//     },
//     {
//       img: icon4,
//       title: "Expertise in Industry",
//     },
//   ];

//   // Services list
//   const serviceList = [
//     {
//       img: "https://image.made-in-china.com/365f3j00wTukUcvsCrzK/Millet-Grinding-Unit-Wheat-Flour-Hulling-and-Milling-Machine.webp",
//       title: "Wheat Flour Grinding",
//       desc: "Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.",
//     },
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2023/9/346103435/ZE/BU/QN/195706343/besan-plant-machinery-500x500.png",
//       title: "Gram Flour Grinding",
//       desc: "Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber. Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.",
//     },
//     {
//       img: "https://s.alicdn.com/@sc04/kf/H0f1a05f2127f485298268211a0f0f5d32/Widely-Popular-Jowar-Flour-Milling-Machine-Wheat-Flour-Milling-Machine-Stone-Gondor-Corn-Flour-Milling-Machine.jpg_300x300.jpg",
//       title: "Jowar Flour Grinding",
//       desc: "Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.",
//       readMore: "Our jowar flour is also a good source of protein and fiber, making it a healthy choice for your family.",
//     },
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2020/12/HT/HV/RU/21496757/kisan-diesel-engine-pump-sets-500x500.jpg",
//       title: "Chilli Pounding",
//       desc: "We specialize in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.",
//       readMore: "We offer a variety of chili powder products, including mild, medium, and hot. We also offer custom blends to meet the specific needs of our customers.",
//     },
//     {
//       img: "https://www.indiantradebird.com/content/images/thumb/638428320643460563_udad-papad-machine-500x500-(1).jpg",
//       title: "Rice Papad",
//       desc: "Our company produces high-quality rice papad that is made with the finest ingredients. We use traditional methods to make our papad, which gives it a unique flavor and texture. Our papad is also gluten-free and vegan.",
//     },
//     {
//       img: "https://avatars.mds.yandex.net/i?id=39b845b841ed7d70bd5760f2511910cb3a8d52b0-10878270-images-thumbs&n=13",
//       title: "Flavoured Spaghetti",
//       desc: "Our speciality is Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients. Our flavors include: Mango, spinach.",
//       readMore: "We offer a variety of rice papad flavors, including plain, salted, spicy, and flavored. We also offer a variety of sizes and shapes to choose from. Our papad is available in bulk or in individual packages.",
//     },
//   ];


//   return (
//     <div className="container-fluid p-0">
//       {/* Banner */}
//       <div
//         className="banner d-flex align-items-center justify-content-start text-start ps-5"
//         style={{
//           height: "600px",
//           backgroundImage: `url(${images[currentIndex]})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           transition: "background-image 1s ease-in-out",
//         }}
//       >
//         <div className="banner-content container">
//           <h1>Shree Laxmi Flour Mill</h1>
//           <p>One stop solution for flour grinding services</p>
//           <a
//             className="btn"
//             style={{
//               backgroundColor: "#f14849",
//               color: "black",
//               fontFamily: "Poppins, sans-serif",
//             }}
//             href="#"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>



// {/* {product} */}
//       <div className="products-container container">
//       <h2 className="products-title">Our Products</h2>
//       <div className="products-grid">
//         {products.map((item) => (
//           <div key={item.id} className="product-card">
//             <img
//               src={selectedImage[item.id] || item.image[0]}
//               alt={item.name}
//               className="product-image"
//               onMouseEnter={() =>
//                 setSelectedImage((prev) => ({ ...prev, [item.id]: item.image[1] }))
//               }
//               onMouseLeave={() =>
//                 setSelectedImage((prev) => ({ ...prev, [item.id]: item.image[0] }))
//               }
//             />
//             <div className="product-info">
//               <h3 className="product-name">{item.name}</h3>
//               <p className="product-desc">{item.description}</p>
//               <p className="product-price">
//                 ₹{item.price} <span className="unit">{item.unit}</span>
//               </p>
//               <div className="btn-group">
//                 <button 
//                   className="btn-buy"
//                   onClick={() => handleBuyNow(item)} 
//                 >
//                   Buy Now
//                 </button>
//                 <button 
//                   className="btn-view"
//                   onClick={() => handleView(item)} 
//                 >
//                   View
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>




//       {/* About Us */}
//       <div className="container mt-5 mb-5 p-5" style={{ backgroundColor: "#eadaab", borderRadius: 5 }}>
//         <div className="row">
//           <div className="col-lg-6 col-md-12 col-sm-12">
//             <h2 style={{ color: "#f14849" }}>About Us</h2>
//             <p style={{ color: "black", width: "90%", textAlign: "justify" }}>
//             Shree-Laxmi flour mill provides our customers with the highest quality products and services. We offer a wide
//           variety of flours and spices to choose from, and we are always happy to help our customers find the perfect
//           products for their needs. We are committed to providing our customers with the best possible experience. We
//           offer competitive prices, fast shipping, and excellent customer service. We are also happy to answer any
//           questions that our customers may have about our products or services. If you are looking for a flour and
//           spices service business that can provide you with the highest quality products and services, then we are the
//           company for you. We look forward to serving you..!
//             </p>
//           </div>
//           <div className="col-lg-6 col-md-12 col-sm-12">
//             <img

//               src="https://linkkit-consultants.hk/wp-content/uploads/2023/06/lycs-architecture-U2BI3GMnSSE-unsplash-1170x694.jpg"
//               style={{ width: "100%", height: "auto", borderRadius: 6 }}
//               alt="About Us"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Why Us */}
//       <div className="whyus-container container my-5 py-5">
//         <h2 className="text-center mb-5 whyus-title">Why Us?</h2>
//         <div className="row justify-content-center">
//           {points.map((point, index) => (
//             <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
//               <div className="whyus-card text-center p-3">
//                 <img src={point.img} alt={point.title} className="whyus-img mb-3" />
//                 <h5>{point.title}</h5>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Services */}
//       <div className="container-fluid pb-5 pt-3" style={{ backgroundColor: "#eadaab" }}>
//         <div className="container">
//           <h2 className="text-center pt-4 mb-4" style={{ color: "#f14849" }}>
//             Our Services
//           </h2>
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {serviceList.map((service, index) => (
//               <div key={index} className="col-sm-12 col-md-6 col-lg-4">
//                 <div className="card h-100">
//                   <img
//                     src={service.img}
//                     style={{
//                       height: 400,
//                       objectFit: "cover",
//                       boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
//                     }}
//                     alt={service.title}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title" >
//                       {service.title}
//                     </h5>
//                     <p className="card-text">{service.desc}</p>
//                     {service.readMore && (
//                       <ul className="navbar-nav">
//                         <li className="nav-item dropdown">
//                           <a
//                             className="nav-link w-25 p-0"
//                             data-bs-toggle="dropdown"
//                             href="#"
//                           >
//                             Read More
//                           </a>
//                           <ul className="dropdown-menu">
//                             <li>
//                               <span className="nav-link p-2 ">{service.readMore}</span>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Location & Contact */}
//       <div className="container mb-5 mt-5">
//         <h2 className="text-center mb-1" style={{ color: "#f14849" }}>
//           Visit Our Location
//         </h2>
//         <p className="text-center">Let us serve you the best</p>
//         <div className="row">
//           <div className="col-lg-6 col-md-12 col-sm-12 ">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4248502144687!2d72.86372318601941!3d21.17527533249432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffbffa131a1%3A0xe60ed1b6225d5800!2sShree%20Laxmi%20Flour%20Mill!5e0!3m2!1sen!2sin!4v1732458288993!5m2!1sen!2sin"
//               width="100%"
//               height={450}
//               style={{ border: 0, borderRadius: "10px" }}
//               allowFullScreen
//               className="mt-3"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <div>
//               <h5 className="pt-5 mb-0">Contact</h5>
//               <p className="mb-0">Name: Rana Hasmukhbhai</p>
//               <p className="mb-2">Phone: +91 9327025104</p>
//               <button className="btn" style={{ backgroundColor: "#f14849", color: "black" }}>
//                 <i className="bi bi-telephone-inbound" /> Call Now
//               </button>
//             </div>
//             <div>
//               <h5 className="mt-5">Our Address</h5>
//               <p>225, Godadara Naher Rd, Bhaktinagar Society, Godadara, Surat, Gujarat 394210</p>
//             </div>
//             <div>
//               <h5 className="mb-1 mt-5">Hours</h5>
//               <p className="mb-0">Sunday - Saturday: 9am - 9:30pm</p>
//               <p>Thursday: 9am - 1pm</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="container-fluid" style={{ backgroundColor: "#f14849" }}>
//         <div className="container mb-4">
//           <div className="row align-items-center">
//             <div className="col-lg-6 col-sm-12">
//               <p style={{ lineHeight: 4, fontSize: 15 }} className="mb-0 text-dark">
//                 © 2024 Laxmi Flour Mill. All Rights Reserved
//               </p>
//             </div>
//             <div className="col-lg-6 col-sm-12 text-end">
//               <ul className="navbar-nav d-flex flex-row justify-content-end">
//                 <li className="nav-item">
//                   <a className="nav-link pe-3 text-dark" href="#">
//                     Contact
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-dark" href="#">
//                     Privacy Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";

// Icons
import icon1 from "../../assets/img/icon-1.png";
import icon2 from "../../assets/img/icon-2.png";
import icon3 from "../../assets/img/icon-3.png";
import icon4 from "../../assets/img/icon-4.png";

// Products JSON
import { products } from "../../json/Product";



export default function Home() {
  // ✅ Banner images
  const images = [
    "https://schc09s2.blob.core.windows.net/cache/5/4/e/f/3/8/54ef38383e3bc5852bda8f2e681ac144d0716ade.jpg",
    "https://avatars.mds.yandex.net/i?id=448166ee715baeb7e2dfdb89bcf376c5_l-5163423-images-thumbs&ref=rim&n=13&w=1200&h=753",
    "https://avatars.mds.yandex.net/i?id=315c8fd4a5f8689abc5d2f33b9aad9dc_l-9181306-images-thumbs&ref=rim&n=13&w=2560&h=1707"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);



  // ✅ Why Us points
  const points = [
    { img: icon1, title: "Latest Milling Machinery" },
    { img: icon2, title: "Reasonable Rates" },
    { img: icon3, title: "Time Efficiency" },
    { img: icon4, title: "Expertise in Industry" },
  ];

  // ✅ Services list
  const serviceList = [
    {
      img: "https://image.made-in-china.com/365f3j00wTukUcvsCrzK/Millet-Grinding-Unit-Wheat-Flour-Hulling-and-Milling-Machine.webp",
      title: "Wheat Flour Grinding",
      desc: "Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.",
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2023/9/346103435/ZE/BU/QN/195706343/besan-plant-machinery-500x500.png",
      title: "Gram Flour Grinding",
      desc: "Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber.",
    },
    {
      img: "https://s.alicdn.com/@sc04/kf/H0f1a05f2127f485298268211a0f0f5d32/Widely-Popular-Jowar-Flour-Milling-Machine.jpg_300x300.jpg",
      title: "Jowar Flour Grinding",
      desc: "Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour.",
      readMore: "Jowar flour is a good source of protein and fiber, making it a healthy choice.",
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2020/12/HT/HV/RU/21496757/kisan-diesel-engine-pump-sets-500x500.jpg",
      title: "Chilli Pounding",
      desc: "We specialize in the production of high-quality chili powder, retaining full flavor and aroma.",
    },
    {
      img: "https://www.indiantradebird.com/content/images/thumb/638428320643460563_udad-papad-machine-500x500-(1).jpg",
      title: "Rice Papad",
      desc: "Our company produces high-quality rice papad that is gluten-free and vegan.",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=39b845b841ed7d70bd5760f2511910cb3a8d52b0-10878270-images-thumbs&n=13",
      title: "Flavoured Spaghetti",
      desc: "Bappa Flour Mill offers a variety of flavored spaghetti dishes like mango and spinach.",
    },
  ];

  return (
    <div className="container-fluid p-0">
      {/* ✅ Banner */}
      <div
        className="banner d-flex align-items-center justify-content-start text-start ps-5"
        style={{
          height: "650px",
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="banner-content container">
          <h1>Shree Laxmi Flour Mill</h1>
          <p>One stop solution for flour grinding services</p>
          <a
            className="btn"
            style={{ backgroundColor: "#f14849", color: "black" }}
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </div>


      {/* ✅ Show Products Section */}
      <div
        className="show-products-section text-center py-5"

      >
        <div className="container">
          <h2 className="mb-4 fw-bold" style={{ color: "#f14849", fontSize: "2.5rem" }}>
            Explore Our Products
          </h2>
          <p className="mb-5 text-muted" style={{ fontSize: "1.2rem" }}>
            Discover high-quality flour, grains, and milling products crafted with the latest technology.
            We ensure purity, freshness, and top-notch quality at reasonable prices.
          </p>

          {/* ✅ Features Grid */}
          <div className="row mb-5">
            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm rounded h-100 bg-white">
                <i className="bi bi-bag-check-fill fs-1 mb-3" style={{ color: "#f14849" }}></i>
                <h5 className="fw-bold">Premium Quality</h5>
                <p className="text-muted">We use state-of-the-art machinery to maintain high standards in every product.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm rounded h-100 bg-white">
                <i className="bi bi-cash-stack fs-1 mb-3" style={{ color: "#f14849" }}></i>
                <h5 className="fw-bold">Affordable Prices</h5>
                <p className="text-muted">Get the best quality at pocket-friendly rates, ideal for homes and businesses.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm rounded h-100 bg-white">
                <i className="bi bi-truck fs-1 mb-3" style={{ color: "#f14849" }}></i>
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="text-muted">Timely service and quick product delivery right at your doorstep.</p>
              </div>
            </div>
          </div>

          {/* ✅ Show Products Button */}
          <button
            className="btn btn-lg px-5 py-3"
            style={{
              backgroundColor: "#f14849",
              color: "white",
              fontSize: "1.2rem",
              borderRadius: "50px",
            }}
            onClick={() => navigate("/product")}
          >
            Show Products <i className="bi bi-arrow-right-circle ms-2"></i>
          </button>
        </div>
      </div>



      {/* ✅ About Us */}

      <div
        className="container mt-4 mb-5 p-5 about-section"
      >
        <h2 className="about-title mb-4">About Us</h2>
        <div className="row align-items-center">
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12">
            <p className="about-text pt-3">
              Shree-Laxmi flour mill provides our customers with the highest
              quality products and services. We offer a wide variety of flours
              and spices to choose from, and we are always happy to help our
              customers find the perfect products for their needs. We are
              committed to providing our customers with the best possible
              experience. We offer competitive prices, fast shipping, and
              excellent customer service. We are also happy to answer any
              questions that our customers may have about our products or
              services. If you are looking for a flour and spices service
              business that can provide you with the highest quality products
              and services, then we are the company for you. We look forward to
              serving you..!
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src="https://linkkit-consultants.hk/wp-content/uploads/2023/06/lycs-architecture-U2BI3GMnSSE-unsplash-1170x694.jpg"
              className="about-img"
              alt="About Us"
            />
          </div>
        </div>
      </div>


      {/* ✅ Why Us */}
      <div className="whyus-container container my-5 py-5 mb-0 ">
        <h2 className="text-center mb-5 whyus-title">Why Us?</h2>
        <div className="row justify-content-center">
          {points.map((point, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="whyus-card text-center p-3">
                <img
                  src={point.img}
                  alt={point.title}
                  className="whyus-img mb-3"
                />
                <h5>{point.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Services */}
      <div className="container-fluid services-section py-5">
        <div className="container">
          <h2 className="text-center  fw-bold mb-5" style={{ color: "#f14849" }}>
            Our Services
          </h2>
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


      {/* ✅ Location & Contact */}
      <div id="contact" className="container mt-5 ">
        <h2 className="text-center mb-1" style={{ color: "#f14849" }}>
          Visit Our Location
        </h2>
        <p className="text-center mb-5">Let us serve you the best</p>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4248502144687!2d72.86372318601941!3d21.17527533249432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffbffa131a1%3A0xe60ed1b6225d5800!2sShree%20Laxmi%20Flour%20Mill!5e0!3m2!1sen!2sin!4v1732458288993!5m2!1sen!2sin"
              width="100%"
              height={450}
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="location"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h5 className="pt-5 mb-0">Contact</h5>
            <p className="mb-0">Name: Rana Hasmukhbhai</p>
            <p className="mb-2">Phone: +91 9327025104</p>
            <button
              className="btn"
              style={{ backgroundColor: "#f14849", color: "black" }}
            >
              <i className="bi bi-telephone-inbound" /> Call Now
            </button>

            <h5 className="mt-5">Our Address</h5>
            <p>
              225, Godadara Naher Rd, Bhaktinagar Society, Godadara, Surat,
              Gujarat 394210
            </p>

            <h5 className="mb-1 mt-5">Hours</h5>
            <p className="mb-0">Sunday - Saturday: 9am - 9:30pm</p>
            <p>Thursday: 9am - 1pm</p>
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
      <div className="container-fluid  mt-5 " style={{ backgroundColor: "#f14849" }}>
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
    </div>
  );
}
