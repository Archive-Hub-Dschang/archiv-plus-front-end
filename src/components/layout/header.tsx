"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded transition bg-accent text-accent-foreground hover:bg-accent/80"
      aria-label="Changer le thème"
      type="button"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="p-0 m-0 bg-transparent border-none shadow-none outline-none text-2xl"
      aria-label="Retour"
      type="button"
    >
      ⬅️
    </button>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-accent">
              <rect width="24" height="24" rx="6" fill="currentColor" />
              <text x="12" y="17" textAnchor="middle" fontSize="14" fill="white" fontFamily="Arial">+</text>
            </svg>
            Archive<span className="text-accent">+</span>
          </Link>
        </div>
        <nav className="flex gap-4 mt-4 sm:mt-0 items-center">
          <Link href="/fields" className="hover:underline hover:text-accent transition">Filières</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}