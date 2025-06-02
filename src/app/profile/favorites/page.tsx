"use client";

import React, { useEffect, useState } from "react";
import { UserLayout } from "@/components/layouts/user-layout";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";

interface Document {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
}

export default function FavoritesPage() {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    // Exemple de récupération des documents favoris depuis une API fictive
    const mockDocuments: Document[] = [
      {
        id: "1",
        title: "Sujet de mathématiques 2023",
        description: "Corrigé complet",
        isFavorite: true,
      },
      {
        id: "2",
        title: "Examen de physique",
        description: "Session rattrapage",
        isFavorite: true,
      },
    ];
    setDocuments(mockDocuments);
  }, []);

  const removeFromFavorites = (id: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  return (
    <UserLayout>
      <div className="p-4 space-y-6">
        <h1 className="text-3xl font-bold text-blue-600">Mes Favoris</h1>
        {documents.length === 0 ? (
          <p className="text-gray-500">Aucun document ajouté aux favoris.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="border rounded-lg p-4 bg-white shadow"
              >
                <h2 className="font-semibold text-lg text-gray-800">
                  {doc.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  {doc.description}
                </p>
                <div className="flex justify-between items-center">
                  <Heart className="text-red-500" fill="currentColor" />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromFavorites(doc.id)}
                    className="flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </UserLayout>
  );
}