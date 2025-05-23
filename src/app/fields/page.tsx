import { getFields } from "@/lib/api/fields"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function FieldsPage() {
  const fields = await getFields()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {fields.map((field) => (
        <Link key={field.id} href={`/fields/${field.id}`}>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{field.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{field.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}