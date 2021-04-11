import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-center p-5">Shopping Cart</h3>
          <button
            onClick={this.props.onReset}
            className="btn btn-secondary m-2"
          >
            Reset
          </button>
          <div className="w-100">
            <div className="product">
              <div className="basket">
                <div className="basket-labels">
                  <ul>
                    <li className="item item-heading">Item</li>
                    <li className="price">Price</li>
                    <li className="quantity">Quantity</li>
                    <li className="subtotal">Subtotal</li>
                  </ul>
                </div>

                {this.props.products.map((prdct) => (
                  <Product
                    key={prdct.id}
                    product={prdct}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingCart;
