import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/home"
import Cart from "./pages/cart"
import ProductDetail from "./components/productDetail"
import SuccesfulPayment from "./pages/successfulPayment"
import ErrorPage from "./components/errorPage"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/product/:id",
      element: <ProductDetail />
    },
    {
      path: "/successfulpayment",
      element: <SuccesfulPayment />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
