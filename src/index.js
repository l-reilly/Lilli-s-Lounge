import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigation } from './components/nav';
import { Home } from "./pages/home"
import { AboutUs } from "./pages/aboutUs"
import { Contact } from "./pages/contact"
import  { Menu } from "./pages/menu"
import { Footer } from "./components/footer"
import { Header } from './components/header';


ReactDOM.render(
  <Router>
    <Navigation />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    <Footer />
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
