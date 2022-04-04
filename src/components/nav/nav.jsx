import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar" >
        <div className="container">
          <div>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
                <NavLink className="nav-link" to="/menu">
                  Our Menu
                </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;