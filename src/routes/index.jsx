import { Navigate, createHashRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import CatPage from "../pages/CatPage";
import PageLayout from "../layout";
import { ShopItems } from "../pages/ShopItems";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/Login";
import AboutPage from "../pages/About";
import DeliveryPage from "../pages/DeliveryPage";

export const router = createHashRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/public",
    element: <PageLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "item",
        element: <ShopItems />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      
      },
      {
        path: "delivery",
        element: <DeliveryPage />,
      },
      {
        path: "cat/:id",
        element: <CatPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/login" replace /> },
]);
