import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  state = {};
  componentWillUnmount() {}
  render() {
    const { name, count, price, id, img } = this.props.product;

    return (
      <>
        <div className="basket-product">
          <div className="item">
            <div className="product-image">
              <img
                src={img}
                alt="description of ll"
                className="product-frame"
              />
            </div>
            <div className="product-details">
              <h1>
                <strong>
                  <span className="item-quantity">{count}</span> {name}
                </strong>{" "}
              </h1>
              <p>Product Code - {id}</p>
            </div>
          </div>
          <div className="price">{price}</div>
          <div className="quantity d-flex">
            <div>
              <span
                className={
                  count === 0
                    ? "badge badge-warning m-3"
                    : "badge badge-primary m-3"
                }
                style={{ fontSize: "1.2em" }}
              >
                {count}
              </span>
            </div>
            <div className="d-flex ">
              <button
                onClick={() => this.props.onIncrement(this.props.product)}
                className="btn btn-primary btn-sm m-2"
              >
                +
              </button>

              <button
                onClick={() => this.props.onDecrement(this.props.product)}
                className="btn btn-primary btn-sm m-2"
              >
                -
              </button>
            </div>
          </div>
          <div className="subtotal">{count * price}</div>
          <div className="remove">
            <button
              onClick={() => this.props.onDelete(this.props.product)}
              className="btn btn-danger btn-sm m-2"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
