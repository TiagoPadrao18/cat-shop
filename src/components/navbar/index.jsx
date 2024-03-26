import { useLocation } from "react-router-dom";
import {
  StyledCartImage,
  StyledImage,
  StyledLeftNav,
  StyledLink,
  StyledNavbar,
  StyledRightNav,
} from "./styled";

const Navbar = () => {
  const NavBarLinks = [
    {
      title: "Home",
      url: "/public/home",
    },
    {
      title: "Shop",
      url: "/public/shop",
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
      <StyledLeftNav>
        <StyledLink to="/home">
          <StyledImage src="/src/assets/logo.png" />
        </StyledLink>

        <StyledLink to="/home">PET-SHOP</StyledLink>
      </StyledLeftNav>
      <StyledRightNav>
        {navElements}
        <StyledLink>
          <StyledCartImage src="/src/assets/icons8-cart-96.png" />
        </StyledLink>
      </StyledRightNav>
    </StyledNavbar>
  );
};

export default Navbar;
