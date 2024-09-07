import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <section>
      <h1 className="text-xl">Oops!</h1>
      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl text-red-700">
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  )
}