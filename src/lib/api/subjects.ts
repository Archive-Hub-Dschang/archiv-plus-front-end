import { ReactNode } from "react";

export interface Subject {
  id: string;
  title: ReactNode;
  name: string;
  description: string;
  fieldId: string;
  levelId: string;
}

// Exemple de données mockées
const subjectsData: Subject[] = [
  {
    id: "1",
    name: "Programmation",
    description: "Introduction à la programmation.",
    fieldId: "1", // Informatique
    levelId: "1",
    title: undefined
  },
  {
    id: "2",
    name: "Algèbre",
    description: "Cours d'algèbre fondamentale.",
    fieldId: "2", // Mathématiques
    levelId: "3",
    title: undefined
  },
  {
    id: "3",
    name: "Physique Quantique",
    description: "Bases de la physique quantique.",
    fieldId: "3", // Physique
    levelId: "4",
    title: undefined
  },
];

// Récupérer tous les sujets
export async function getSubjects(): Promise<Subject[]> {
  return subjectsData;
}

// Récupérer les sujets par niveau
export async function getSubjectsByLevel(levelId: string): Promise<Subject[]> {
  return subjectsData.filter((subject) => subject.levelId === levelId);
}

// Récupérer un sujet par son id
export async function getSubjectById(id: string, fieldId?: string, levelId?: string): Promise<Subject | null> {
  return subjectsData.find(
    (subject) =>
      subject.id === id &&
      (!fieldId || subject.fieldId === fieldId) &&
      (!levelId || subject.levelId === levelId)
  ) || null;
}