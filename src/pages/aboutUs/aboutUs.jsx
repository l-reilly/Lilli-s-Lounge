import React from "react";
import './aboutUs.css'
import { Map } from '../../components/map'
import {GiFallingLeaf} from "react-icons/gi"
import {GiFruitTree} from "react-icons/gi"
import {GiSpotedFlower} from "react-icons/gi"

function About() {
  return (
    
    <div className="about">
      <div className="container">
        <div className="about-items">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          
          <div className="col-lg-5">
          <GiFallingLeaf  className="icon" size={28}/>
          <a href="/"><h1 className="font-weight-light">About Us</h1></a>
            <p>
              We are a casual "green" cafe located in the heart of the enchanting city of Oviedo. Come join us for a coffee in the garden room, or enjoy an extensive menu of American-fusion dishes. We look forward to seeing you soon!

            </p>
          </div>
          <div className="col-lg-5">
          <GiFruitTree className="icon" size={28}/>
            <a href="/contact"><h1 className="font-weight-light">Contact Us</h1></a>
            <p>
              Please get in touch with any questions or doubts! 
              <br></br>
              Use our phone number or email to make a reservation.
            </p>
          </div>
          <div className="col-lg-5">
          <GiSpotedFlower className="icon" size={28}/>
            <a href="/menu"><h1 className="font-weight-light">Our Menu</h1></a>
            <p>
              We are constantly updating our menus to bring our customers the freshest, most seasonal ingredients.
              <br></br>
              Check out our current offerings here. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;