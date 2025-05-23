import React from "react";
import Link from "next/link";
import { getSubjects } from "../lib/api/subjects";

type Subject = {
  id: string;
  name: string;
  description?: string;
};

interface SubjectsGridProps {
  subjects: Subject[];
}

async function SubjectsPage() {
  const subjectsRaw = await getSubjects();
  const subjects = subjectsRaw.map((subject) => ({
    ...subject,
    id: String(subject.id),
  }));

  return <SubjectsGrid subjects={subjects} />;
}

export default async function SubjectsGrid({ subjects }: SubjectsGridProps): Promise<React.JSX.Element> {
  if (!subjects || subjects.length === 0) {
    return <p className="text-muted-foreground">No subjects found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {subjects.map((subject) => (
        <Link key={subject.id} href={`/subjects/${subject.id}`}>
          <div className="rounded-lg border p-4 hover:shadow-md transition-shadow bg-card">
            <h2 className="text-xl font-semibold mb-2">{subject.name}</h2>
            <p className="text-muted-foreground">{subject.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}