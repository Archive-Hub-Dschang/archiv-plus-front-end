import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-accent">
            <rect width="24" height="24" rx="6" fill="currentColor" />
            <text x="12" y="17" textAnchor="middle" fontSize="14" fill="white" fontFamily="Arial">+</text>
          </svg>
          Archive<span className="text-accent">+</span>
        </Link>
        <nav className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/fields" className="hover:underline hover:text-accent transition">Filières</Link>
        </nav>
      </div>
    </header>
  );
}