import React from "react";
import "../Home/Home.css";
import Navbar from "../Navbar/Navbar";
import CS from "../../../img/CS.png";
import group from "../../../img/Group94.png";
import group123 from "../../../img/Group123.png";
import group1 from "../../../img/Group1.png";
import maks from "../../../img/Mask.png";
import Products from "../Products/Products";
import group114 from "../../../img/Group114.png";
import starts from "../../../img/Group85.png";
import Footer from "../../footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="main_header">
          <div className="main_text">
            <h1>
              Making time a good time <br /> by making food the good <br />{" "}
              food.
            </h1>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need <br /> not only Just Food Stalls with Persons but also
              specialized equipment,
            </p>
            <div className="btns">
              <button className="food">Order Now</button>
              <button className="food">Food Details</button>
            </div>
          </div>
          <div className="main_img">
            <img className="cs" src={CS} alt="" />
          </div>
        </div>
        <div className="with">
          <div className="with_top">
            <h4>Features</h4>
            <h1>Food with a New Passion</h1>
          </div>
          <div className="with_cards">
            <div className="with_card">
              <div
                style={{ background: " rgb(143, 166, 50)", opacity: "0.5" }}
                className="with_box"
              >
                <img src={group} alt="" />
              </div>
              <h4>Quality Food</h4>
              <p>
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
            <div className="with_card">
              <div className="with_box">
                <img src={group123} alt="" />
              </div>
              <h4>Food Delivery</h4>
              <p>
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
            <div className="with_card">
              <div
                style={{ background: " rgb(220, 120, 11)", opacity: "0.5" }}
                className="with_box"
              >
                <img src={group1} alt="" />
              </div>
              <h4>Super Taste</h4>
              <p>
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
          </div>
        </div>
        <div className="main_girl">
          <div className="main_girl_img">
            <img className="rasm_g" src={maks} alt="" />
          </div>
          <div className="main_girl_text">
            <h5>ABOUT US</h5>
            <h1>
              Food Stalls with Persons but to <br /> Product marketing plane{" "}
              <br />
              catlogues etc to.{" "}
            </h1>
            <p>
              There are many things are needed to start the Fast Food Business.{" "}
              <br /> You need not only Just Food Stalls with Persons but also{" "}
              <br />
              equipment make your marketing plane Effective.
            </p>
            <button className="btn_navbar">Read More</button>
          </div>
        </div>
        <div className="menu_flex">
          <div className="menu_text">
            <h4>MENU</h4>
            <h1>Food Full of treaty Love</h1>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls <br /> with Persons but also
              specialized equipment, Skills to manage Customers,{" "}
            </p>
          </div>
          <div className="menus">
            <Products />
            <button className="food">Learn More</button>
          </div>
        </div>
        <div className="menu_flex">
          <div className="menu_text">
            <h4>Testimonial</h4>
            <h1>Making Food great again and again</h1>
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage <br /> Customers,
              Effective Product catlogues etc to make your.
            </p>
          </div>
        </div>
        <div className="more_texts">
          <img src={group114} alt="" />
          <p>
            You need not only Just Food Stalls with Persons but also specialized{" "}
            <br />
            equipment, Skills to manage Customers, Effective Product catlogues{" "}
            <br />
            etc very successful to make your.
          </p>
          <img src={starts} alt="" />
          <h4>Augusta W. Reynoso</h4>
          <h5>UI&UX DeSIGNER</h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
