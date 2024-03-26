import { useLocation } from "react-router-dom";
import { StyledLink, StyledNavbar, StyledRightNav } from "./styled";

const Navbar = () => {
  const NavBarLinks = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Shop",
      url: "/shop",
    },
  ];


  const location = useLocation();

  console.log(location.pathname);
  const navElements = NavBarLinks.map((item) => (
    <StyledLink
      to={item.url}
      key={item.title}
      $isActive={location.pathname === item.url}
    >
      {item.title}
    </StyledLink>

  ));

  return (
    <StyledNavbar>
      <StyledLink>PET-SHOP</StyledLink>    
      <StyledRightNav>{navElements}</StyledRightNav>
    </StyledNavbar>
  );
};

export default Navbar;
