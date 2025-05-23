import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-muted text-muted-foreground border-t mt-12">
      <div className="container mx-auto py-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Archive+</span> — Tous droits réservés.
        </div>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">À propos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}