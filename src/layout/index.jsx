import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

const PageLayout = () => {
  const [cartOpacity, setCartOpacity] = useState(0);


  console.log(cartOpacity);
  return (
    <>
      <Navbar setCartOpacity={setCartOpacity} />
      <Cart opacity={cartOpacity} />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
