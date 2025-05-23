import { getLevelById } from "@/lib/api/levels"
import { getSubjectsByLevel } from "@/lib/api/subjects"
import { notFound } from "next/navigation"
import SubjectsGrid from "@/components/subjects-grid"

export default async function LevelPage({
  params,
}: {
  params: { fieldId: string; levelId: string }
}) {
  const level = await getLevelById(params.levelId)
  const subjectsRaw = await getSubjectsByLevel(params.levelId)
  const subjects = subjectsRaw.map((subject: any) => ({
    id: subject.id,
    name: subject.name ?? "",
    description: subject.description,
  }))

  if (!level) return notFound()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{level.name}</h1>
      <p className="text-muted-foreground mb-6">{level.description}</p>
      
      <SubjectsGrid subjects={subjects} />
    </div>
  )
}