import React from "react";
import { useCart } from "../../context/CartProvider";

function Checkout() {
  const { cart } = useCart();

  console.log(cart);

  return <div>Checkout</div>;
}

export default Checkout;
