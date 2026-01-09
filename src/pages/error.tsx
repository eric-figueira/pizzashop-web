import { Link, useRouteError } from "react-router";

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-semibold">Oops! Algo aconteceu...</h1>
      <p className="text-lg text-muted-foreground">
        Um erro inesperado ocorreu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre className="my-8">
        {error?.message || JSON.stringify(error)}
      </pre>
      <p className="text-lg text-accent-foreground">
        Voltar para o <Link to="/" className="text-sky-600 dark:text-sky-400 underline underline-offset-4">Dashboard</Link>
      </p>
    </div>
  )
}