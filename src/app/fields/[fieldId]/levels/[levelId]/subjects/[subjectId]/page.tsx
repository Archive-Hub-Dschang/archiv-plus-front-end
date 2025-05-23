import { getSubjectById } from "@/lib/api/subjects";
import { notFound } from "next/navigation";
import SubjectTabs from "@/components/subject-tabs";

export default async function SubjectPage({
  params,
}: {
  params: { fieldId: string; levelId: string; subjectId: string };
}) {
  const subject = await getSubjectById(params.subjectId);
  console.log("subject", subject); // Debug : affichera le sujet trouvé ou null dans le terminal

  if (!subject) return notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{subject.title || subject.name}</h1>
        <div className="flex gap-2 mt-2">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {subject.fieldId}
          </span>
          <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
            {subject.levelId}
          </span>
        </div>
      </div>

      <SubjectTabs
        subject={{
          id: String(subject.id),
          name: String(subject.title ?? subject.name ?? ""),
          field: String(subject.fieldId ?? ""),
          level: String(subject.levelId ?? ""),
          description: String(subject.description ?? ""),
        }}
      />
    </div>
  );
}