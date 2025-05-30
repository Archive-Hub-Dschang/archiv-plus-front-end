"use client";

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Type Document
type Document = {
  id: string;
  title: string;
  department: string;
  filiere: string;
  niveau: string;
  matiere: string;
  downloads: number;
  dateAjout: string;
};

// Type pour le champ filtre
type FilterKey = 'department' | 'filiere' | 'niveau' | 'matiere' | 'sortBy';

const SearchPage: React.FC = () => {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    department: '',
    filiere: '',
    niveau: '',
    matiere: '',
    sortBy: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Document[]>([]);

  const matiereMap: Record<string, string[]> = {
    'Maths_Licence 1': ['Analyse', 'Algèbre'],
    'Maths_Licence 2': ['Topologie', 'Probabilités'],
    'Physique_Licence 1': ['Mécanique', 'Optique'],
    'Physique_Licence 2': ['Thermo', 'Électromagnétisme'],
    'Philosophie_Licence 1': ['Logique', 'Éthique'],
    'Philosophie_Master': ['Métaphysique', 'Esthétique'],
  };

  const getMatieres = (): string[] => {
    const key = `${filters.filiere}_${filters.niveau}`;
    return matiereMap[key] || [];
  };

  useEffect(() => {
    fetchData();
  }, [filters, searchTerm]);

  useEffect(() => {
    // Reset matiere quand filiere ou niveau change
    setFilters(prev => ({ ...prev, matiere: '' }));
  }, [filters.filiere, filters.niveau]);

  const fetchData = async () => {
    const mockData: Document[] = [
      {
        id: '1',
        title: 'Sujet Math 2022',
        department: 'Sciences',
        filiere: 'Maths',
        niveau: 'Licence 1',
        matiere: 'Analyse',
        downloads: 120,
        dateAjout: '2024-03-01',
      },
      {
        id: '2',
        title: 'Sujet Physique 2023',
        department: 'Sciences',
        filiere: 'Physique',
        niveau: 'Licence 2',
        matiere: 'Thermo',
        downloads: 300,
        dateAjout: '2024-05-20',
      },
    ];

    let results = [...mockData];

    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== 'sortBy') {
        results = results.filter(item => item[key as keyof Document] === value);
      }
    });

    if (searchTerm.trim()) {
      results = results.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.sortBy === 'downloads') {
      results.sort((a, b) => b.downloads - a.downloads);
    } else if (filters.sortBy === 'date') {
      results.sort(
        (a, b) => new Date(b.dateAjout).getTime() - new Date(a.dateAjout).getTime()
      );
    }

    setSearchResults(results);
  };

  const handleChange = (field: FilterKey, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        🎓 Recherche de Sujets & Corrections
      </h1>

      <Input
        placeholder="🔍 Rechercher un titre de document..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-base"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            label: 'Département',
            field: 'department' as FilterKey,
            values: ['Sciences', 'Lettres', 'Économie'],
          },
          {
            label: 'Filière',
            field: 'filiere' as FilterKey,
            values: ['Maths', 'Physique', 'Philosophie'],
          },
          {
            label: 'Niveau',
            field: 'niveau' as FilterKey,
            values: ['Licence 1', 'Licence 2', 'Master'],
          },
        ].map(({ label, field, values }) => (
          <Select
            key={field}
            onValueChange={(value) => handleChange(field, value)}
            value={filters[field]}
          >
            <SelectTrigger>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {values.map(val => (
                <SelectItem key={val} value={val}>
                  {val}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}

        <Select
          onValueChange={(value) => handleChange('matiere', value)}
          value={filters.matiere}
          disabled={!filters.filiere || !filters.niveau}
        >
          <SelectTrigger>
            <SelectValue placeholder="Matière" />
          </SelectTrigger>
          <SelectContent>
            {getMatieres().map(m => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => handleChange('sortBy', value)}
          value={filters.sortBy}
        >
          <SelectTrigger>
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="downloads">Popularité</SelectItem>
            <SelectItem value="date">Date d'ajout</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            Aucun document trouvé.
          </p>
        ) : (
          searchResults.map(doc => (
            <Card
              key={doc.id}
              className="bg-blue-50 hover:bg-blue-100 transition"
            >
              <CardContent className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-blue-800">
                  {doc.title}
                </h2>
                <p className="text-sm text-gray-600">
                  📚 {doc.matiere} – {doc.niveau}
                </p>
                <p className="text-sm text-gray-600">
                  🏫 {doc.department} / {doc.filiere}
                </p>
                <p className="text-sm">
                  📥 Téléchargements : <strong>{doc.downloads}</strong>
                </p>
                <p className="text-xs text-gray-400">
                  📅 Ajouté le : {new Date(doc.dateAjout).toLocaleDateString()}
                </p>
                <Button className="w-full mt-2">Voir le document</Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;