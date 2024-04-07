import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import "/index.css";
import CartProvider from "./context/cart.jsx";
import LoginProvider from "./context/auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </LoginProvider>
  </React.StrictMode>
);
