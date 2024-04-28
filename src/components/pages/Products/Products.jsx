import React, { Component } from "react";
import axios from "../../../api";
import "../Products/Products.css";
import starts from "../../../img/Group85.png";
export class Products extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    axios
      .get("/products")
      .then((res) => this.setState({ data: res.data.products }))
      .catch((res) => console.log(res));
  }
  render() {
    return (
      <div className="menus">
        {this.state.data?.slice(0, 6).map((el) => (
          <div key={el.id} className="menu">
            <div className="menu_img">
              <img
                className="rasm"
                key={el.id}
                src={el.images[0]}
                alt={el.title}
              />
            </div>
            <div className="menu_text">
              <div className="text_price">
                <h3>{el.title}</h3>
                <h3 style={{ color: "red" }}>${el.price}</h3>
              </div>

              <p>{el.description.slice(0, 60)}...</p>
              <div className="plus">
                <div className="plus_card">+</div>
                <img src={starts} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
