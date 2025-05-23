"use client"

import * as React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Tabs({ defaultValue, className, children }: { defaultValue: string; className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, asChild, children }: { value: string; asChild?: boolean; children: React.ReactNode }) {
  return <button type="button">{children}</button>;
}

export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  return <div>{children}</div>;
}

// Define the Subject type according to your requirements
export type Subject = {
  id: string;
  name: string;
  field: string;
  level: string;
  description: string;
  // Add other fields as needed
};

const subjectsData: Subject[] = [
  {
    id: "1",
    name: "Programmation", // ou name selon ton modèle
    field: "1",
    level: "1",
    description: "Introduction à la programmation.",
  },
  // ...
];

export default function SubjectTabs({ subject }: { subject: Subject }) {
  const pathname = usePathname()

  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="details" asChild>
          <Link href={`${pathname}`}>Détails</Link>
        </TabsTrigger>
        <TabsTrigger value="corrections" asChild>
          <Link href={`${pathname}/corrections`}>Corrections</Link>
        </TabsTrigger>
        <TabsTrigger value="supports" asChild>
          <Link href={`${pathname}/supports`}>Supports</Link>
        </TabsTrigger>
        <TabsTrigger value="videos" asChild>
          <Link href={`${pathname}/videos`}>Vidéos</Link>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="details">
        <div className="mt-4 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-muted-foreground">{subject.description}</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}