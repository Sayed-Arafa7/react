import React from "react";

const Cart = (props) => {
  return (
    <i
      onClick={() => props.onToggleInCart(props.product)}
      style={props.product.inCart ? null : { color: "#80808080" }}
      className="fas fa-cart-plus"
    ></i>
  );
};

export default Cart;
