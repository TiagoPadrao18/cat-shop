import { Navigate, createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import CatPage from "../pages/CatPage";
import PageLayout from "../layout";
import { ShopItems } from "../pages/ShopItems";
import CheckoutPage from "../pages/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/public",
    element: <PageLayout />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "item",
        element: <ShopItems/>
      },
      {
        path: "checkout",
        element: <CheckoutPage/>
      },
      {
        path: "cat/:id",
        element: <CatPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);
