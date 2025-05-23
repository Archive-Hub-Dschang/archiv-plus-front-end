export interface Level {
  id: string;
  name: string;
  description: string;
  fieldId: string;
}

// Exemple de données mockées
const levelsData: Level[] = [
  {
    id: "1",
    name: "Licence 1",
    description: "Première année du cycle licence.",
    fieldId: "1", // Informatique
  },
  {
    id: "2",
    name: "Licence 2",
    description: "Deuxième année du cycle licence.",
    fieldId: "1", // Informatique
  },
  {
    id: "3",
    name: "Licence 3",
    description: "Troisième année du cycle licence.",
    fieldId: "2", // Mathématiques
  },
  {
    id: "4",
    name: "Master 1",
    description: "Première année du cycle master.",
    fieldId: "3", // Physique
  },
];

export async function getLevelsByField(fieldId: string): Promise<Level[]> {
  // Retourne tous les niveaux pour une filière donnée
  return levelsData.filter((level) => level.fieldId === fieldId);
}

export async function getLevelById(id: string): Promise<Level | null> {
  // Retourne un niveau par son id
  const level = levelsData.find((level) => level.id === id);
  return level || null;
}