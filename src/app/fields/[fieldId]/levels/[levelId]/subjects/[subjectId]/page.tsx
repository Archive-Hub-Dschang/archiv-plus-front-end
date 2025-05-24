import { getSubjectById } from "@/lib/api/subjects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download } from "lucide-react";

export default async function SubjectDetailPage({
  params,
}: {
  params: { fieldId: string; levelId: string; subjectId: string };
}) {
  // Récupération du sujet
  const subject = await getSubjectById(params.subjectId);

  if (!subject) return notFound();

  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/fields/${params.fieldId}/levels/${params.levelId}/subjects`}>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{subject.title || subject.name}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Détails du sujet</CardTitle>
              <CardDescription>Informations complètes sur ce sujet d'examen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Description</h3>
                <p className="text-muted-foreground">{subject.description}</p>
              </div>
              <Separator />
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <h3 className="font-medium">Filière</h3>
                  <p className="text-muted-foreground">{subject.fieldId}</p>
                </div>
                <div>
                  <h3 className="font-medium">Niveau</h3>
                  <p className="text-muted-foreground">{subject.levelId}</p>
                </div>
                <div>
                  <h3 className="font-medium">Matière</h3>
                  <p className="text-muted-foreground">{subject.name}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/login">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Télécharger le sujet
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Colonne droite pour d'autres infos ou actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sujets similaires</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li key={i}>
                    <Link
                      href={`/fields/${params.fieldId}/levels/${params.levelId}/subjects/similar-${i + 1}`}
                      className="text-sm hover:underline hover:text-primary"
                    >
                      Sujet similaire {i + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}