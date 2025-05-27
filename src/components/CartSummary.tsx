import React from "react";
import { useCart } from "../hooks/useCart";

const CartSummary: React.FC = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Total : {total} €</h2>
      <button onClick={clearCart}>Vider le panier</button>
    </div>
  );
};

export default CartSummary;