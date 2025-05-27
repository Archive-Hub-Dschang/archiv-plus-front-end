import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Bienvenue sur Archiv Plus</h1>
      <p>Accédez à votre panier pour voir vos articles sélectionnés.</p>
      <Link href="/cart">
        <button style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Aller au panier 🛒
        </button>
      </Link>
    </div>
  );
}
