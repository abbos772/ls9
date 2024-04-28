import React, { Component } from "react";
import "../footer/Footer.css";
import food from "../../img/food.png";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer_top">
          <p>Contact </p>
          <h1>
            Food Stalls with Persons but also specialized <br /> equipment,
            Skills to manage.
          </h1>
          <div className="inp">
            <button className="send">Send</button>
            <input id="search" type="text" placeholder="Enter your message" />
          </div>
        </div>
        <div className="foot">
          <div className="continer">
            <div className="foot_flex">
              <div className="foot1">
                <img width={60} src={food} alt="" />
                <p>www.company name.com</p>
                <p>companyname@gmail.com</p>
                <p>Phone: +7 485-118-03-25</p>
              </div>
              <div className="foot1">
                <h3>Home</h3>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <p>UI & UX Design</p>
                <p>Web Design</p>
              </div>
              <div className="foot1">
                <h3>Menu</h3>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <p>UI & UX Design</p>
                <p>Web Design</p>
              </div>
              <div className="foot1">
                <h3>Company</h3>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <p>Referral Program</p>
                <p>UI & UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
