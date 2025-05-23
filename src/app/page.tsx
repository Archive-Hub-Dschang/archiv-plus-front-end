import Link from "next/link";

export default function Home() {
  // Placeholder IDs for demonstration; replace with real IDs as needed
  const fieldId = "1";
  const levelId = "1";
  const subjectId = "1";

  return (
    <div className="p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">Bienvenue sur l’archive+</h1>
      <p className="mb-8 text-muted-foreground">
        Utilisez les liens ci-dessous pour naviguer dans l’application.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/fields">
          <div className="rounded-lg border p-6 hover:shadow-md transition-shadow bg-card cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Filières</h2>
            <p className="text-muted-foreground">Voir toutes les filières</p>
          </div>
        </Link>
        <Link href={`/fields/${fieldId}/levels`}>
          <div className="rounded-lg border p-6 hover:shadow-md transition-shadow bg-card cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Niveaux</h2>
            <p className="text-muted-foreground">Voir tous les niveaux</p>
          </div>
        </Link>
        <Link href={`/fields/${fieldId}/levels/${levelId}/subjects`}>
          <div className="rounded-lg border p-6 hover:shadow-md transition-shadow bg-card cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Sujets</h2>
            <p className="text-muted-foreground">Voir tous les sujets</p>
          </div>
        </Link>
        <Link href={`/fields/${fieldId}/levels/${levelId}/subjects/${subjectId}`}>
          <div className="rounded-lg border p-6 hover:shadow-md transition-shadow bg-card cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Détail d’un sujet</h2>
            <p className="text-muted-foreground">Voir un sujet en détail</p>
          </div>
        </Link>
      </div>
    </div>
  );
};