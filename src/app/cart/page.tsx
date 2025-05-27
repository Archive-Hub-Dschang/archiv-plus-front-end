"use client";
import React from "react";
import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/CartItem";
import styles from "./cart.module.css";

const CartTable = () => {
  const { cart } = useCart();

  if (cart.length === 0) return <p>Votre panier est vide.</p>;

  return (
    <table className={styles.cartTable}>
      <thead>
        <tr>
          <th>Produit</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default function CartPage() {
  const { getTotal, clearCart } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Mon Panier</h1>
      <CartTable />
      <div className={styles.cartTotal}>
        Total : {getTotal()} €
      </div>
      <button className={styles.cartButton} onClick={clearCart}>
        Vider le panier
      </button>
    </div>
  );
}