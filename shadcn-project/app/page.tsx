import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Bienvenido a Shadcn + Next.js</h1>
        <Button variant="default">Botón primario</Button>
        <Button variant="outline">Botón secundario</Button>
      </div>
    </main>
  );
}
