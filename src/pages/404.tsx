import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-semibold">Página não encontrada</h1>
      <p className="text-lg text-accent-foreground">
        Voltar para o <Link to="/" className="text-sky-600 dark:text-sky-400 underline underline-offset-4">Dashboard</Link>
      </p>
    </div>
  )
}