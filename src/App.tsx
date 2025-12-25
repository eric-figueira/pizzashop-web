import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | PizzaShop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
