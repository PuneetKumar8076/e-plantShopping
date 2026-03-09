import React from "react";

function CartItem({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

export default CartItem;
