import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;
