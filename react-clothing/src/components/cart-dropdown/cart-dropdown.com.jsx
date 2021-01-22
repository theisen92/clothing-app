import React from "react";

import CustomeButton from "../custom-button/custom-button.com";

import "./cart-dropdown.style.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomeButton>GO TO CHECKOUT</CustomeButton>
  </div>
);

export default CartDropdown;
