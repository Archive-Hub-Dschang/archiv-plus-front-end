export interface Field {
  id: string;
  name: string;
  description: string;
}

export async function getFields(): Promise<Field[]> {
  // Remplace ceci par un appel à ta base de données ou API si besoin
  return [
    {
      id: "1",
      name: "Informatique",
      description: "Filière dédiée à l'informatique et au développement.",
    },
    {
      id: "2",
      name: "Mathématiques",
      description: "Filière pour les passionnés de mathématiques.",
    },
    {
      id: "3",
      name: "Physique",
      description: "Filière pour découvrir la physique fondamentale et appliquée.",
    },
  ];
}

export async function getFieldById(id: string): Promise<Field | null> {
  const fields = await getFields();
  const field = fields.find((f) => f.id === id);
  return field || null;
}