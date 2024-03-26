import { Navigate, createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import CatPage from "../pages/CatPage";
import PageLayout from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cat/:id",
        element: <CatPage />,
      },
      {
        path: "*",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);
