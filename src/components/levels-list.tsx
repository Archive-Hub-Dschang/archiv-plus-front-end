import React from "react";
import Link from "next/link";

type Level = {
  id: string;
  name: string;
  description?: string;
};

interface LevelsListProps {
  levels: Level[];
  fieldId: string;
}

export default function LevelsList({ levels, fieldId }: LevelsListProps) {
  if (!levels || levels.length === 0) {
    return <p className="text-muted-foreground">Aucun niveau trouvé.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {levels.map((level) => (
        <li key={level.id}>
          <Link href={`/fields/${fieldId}/levels/${level.id}`}>
            <div className="rounded-lg border p-4 hover:shadow-md transition-shadow bg-card cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">{level.name}</h3>
              <p className="text-muted-foreground">{level.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}