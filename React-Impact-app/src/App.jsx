
import React from "react";
import Header from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import ImgLogo from "./components/ImgLogo/ImgLogo";
import AboutContent from "./components/AboutContent/AboutContent";
import AboutPic from "./components/AboutPic/AboutPic";
import OurServices from "./components/OurServices/OurServices";
import Footer from "./components/footer/Footer";
import './App.css'


function App() {


  return (
    <>
     <Header />
     <Banner />
     <AboutUs />
     <ImgLogo />
     <AboutContent />
     <AboutPic />
     <OurServices />
     <Footer />
    </>
  )
}

export default App;


