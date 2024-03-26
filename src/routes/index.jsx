import { Navigate, createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import CatPage from "../pages/CatPage";
import PageLayout from "../layout";

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
        path: "cat/:id",
        element: <CatPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/home" replace /> },
]);
