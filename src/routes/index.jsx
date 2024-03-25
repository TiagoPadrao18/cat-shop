import { Navigate, createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "*",
    element: <Navigate to={<Home />} replace />,
  },
]);
