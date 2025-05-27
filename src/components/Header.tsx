import React from "react";
import Link from "next/link";
import { useCart } from "../hooks/useCart";

const Header: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      background: "#f5f5f5",
      borderBottom: "1px solid #ddd"
    }}>
      <Link href="/" style={{ textDecoration: "none", color: "#333" }}>
        <h2>Mon Site</h2>
      </Link>
      <Link href="/cart" style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 24, marginRight: 8 }}>🛒</span>
        {totalItems > 0 && (
          <span style={{
            position: "absolute",
            top: -5,
            right: -10,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 7px",
            fontSize: 12
          }}>
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;