import React from "react";




export default function WhyUs() {
  const points = [
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4P-GcAGOwY5C5118GxIWXh4vRAmH4rPcY8QnQtaF5fUE3HPNi",
      title: "Latest Milling Machinery",
    },
    {
      img: "file:///Users/apple/Desktop/React%20Js/React-FlourMill-app/src/component%20/img/icon-2.png",
      title: "Reasonable Rates",
    },
    {
      img: "file:///Users/apple/Desktop/React%20Js/React-FlourMill-app/src/component%20/img/icon-3.png",
      title: "Time Efficiency",
    },
    {
      img: "file:///Users/apple/Desktop/React%20Js/React-FlourMill-app/src/component%20/img/icon-4.png",
      title: "Expertise in Industry",
    },
  ];

  return (
    <div className="whyus-container container my-5 py-5">
      <h2 className="text-center mb-5 whyus-title">Why Us?</h2>
      <div className="row justify-content-center">
        {points.map((point, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="whyus-card text-center p-3">
              <img src={point.img} alt={point.title} className="whyus-img mb-3" />
              <h5>{point.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
