import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PageLayout;
