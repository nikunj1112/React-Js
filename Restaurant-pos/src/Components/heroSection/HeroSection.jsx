import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

// 🔹 Import images
import hero1 from "../../assets/img/heroSection-img/hero-Img01.jpg";
import hero2 from "../../assets/img/heroSection-img/hero-Img02.jpg";
import hero3 from "../../assets/img/heroSection-img/hero-Img03.jpeg";

export default function HeroSection() {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // 🔁 Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
      {/* 🔹 Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* 🔹 Overlay */}
      <div className="overlay"></div>

      {/* 🔹 Hero Content */}
      <div className="hero-content text-center">
        <h1 className="hero-title animate-fade">MAHARAJ PALACE</h1>
        <p className="hero-subtitle animate-fade-delay">
          Experience Royal Dining Like Never Before
        </p>
        <button
          className="btn-start animate-fade-btn"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>

      {/* 🔹 Features Section */}
      <div className="features-container">
        <div className="feature-card">
          <i className="ri-restaurant-2-line"></i>
          <h4>Smart Order System</h4>
          <p>Seamlessly take dine-in and takeaway orders.</p>
        </div>
        <div className="feature-card">
          <i className="ri-bill-line"></i>
          <h4>Instant Billing</h4>
          <p>Generate accurate bills instantly with one tap.</p>
        </div>
        <div className="feature-card">
          <i className="ri-bar-chart-box-line"></i>
          <h4>Sales Analytics</h4>
          <p>Track your restaurant’s growth in real time.</p>
        </div>
      </div>
    </div>
  );
}


//