import { getFieldById } from "@/lib/api/fields";
import { getLevelsByField } from "@/lib/api/levels";
import { notFound } from "next/navigation";
import LevelsList from "@/components/levels-list";

export default async function FieldLevelsPage({
  params,
}: {
  params: { fieldId: string };
}) {
  // On récupère la filière sélectionnée
  const field = await getFieldById(params.fieldId);
  // On récupère les niveaux associés à cette filière
  const levels = await getLevelsByField(params.fieldId);

  if (!field) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{field.name}</h1>
      <p className="text-muted-foreground mb-8">{field.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Niveaux disponibles</h2>
      <LevelsList levels={levels} fieldId={params.fieldId} />
    </div>
  );
}