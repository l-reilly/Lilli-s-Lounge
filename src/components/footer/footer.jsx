import React from "react";
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <footer className="py-5 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2020
            <br></br>
            *Website part of Web Development Portfolio Project, restaurant does not exist, photos do not belong to me*
          </p>
          <ul className="permalinks">
              <li>
                  <a href="/contact">Contact Us</a> </li>
                  <li><a href="/menu">Our Menu</a></li>
                  <li><a href="/home">About Us</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;