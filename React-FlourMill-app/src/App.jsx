import './App.css'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './component /navbar/Navbar';
import Home from './component /home/Home';
import Product from './component /product/Product';
import AboutUs from './component /aboutUs/AboutUs';
import WhyUs from './component / whyUs / WhyUs';
import Services from './component /services/Services';
import VisitUs from './component /visitUs/VisitUs';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Cart from './component /cart/Cart';
import { products } from './json/Product'
import ProductDetails from './component /productDetails/ProductDetails';
import Login from './component /login/Login';




function App() {
  const [CartItem, setCartItem] = useState([]);
  const navigate = useNavigate();

  const onAddToCart = (product) => {
    const exist = CartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        CartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };


  const onAdd = (product) => {
    const exist = CartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        CartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = CartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(CartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  

  return (
    <>
       <Navbar />

<Routes>
  <Route path='/' element={<Home />} />
  <Route 
    path='/product' 
    element={<Product  products={products} onAddToCart={onAddToCart}  />} 
  />
  <Route path='/AboutUs' element={<AboutUs />} />
  <Route path='/WhyUs' element={<WhyUs />} />
  <Route path='/Services' element={<Services />} />
  <Route path='/VisitUs' element={<VisitUs />} />
  <Route 
    path='/Cart' 
    element={<Cart  CartItem={CartItem}  setCartItem={setCartItem}  onAdd={onAdd} onRemove={onRemove}  />} 
  />
   <Route path="/product/:id" element={<ProductDetails />} />
   <Route path="/login" element={<Login />} /> 
</Routes>




    </>
  )
}

export default App




