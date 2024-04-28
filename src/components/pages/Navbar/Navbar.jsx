import React, { Component } from "react";
import food from "../../../img/food.png";
import "../Navbar/Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="continer">
        <div className="navbar">
          <div className="nav">
            <img src={food} alt="" />
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Menu</a>
            <a href="">Features</a>
            <a href="">Contact us</a>
          </div>
          <div className="nav">
            <button className="btn_navbar">Booking Now</button>
          </div>
        </div>
      </div>
    );
  }
}
