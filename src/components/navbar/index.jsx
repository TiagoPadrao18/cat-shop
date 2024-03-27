import { useLocation } from "react-router-dom";
import {
  StyledCartImage,
  StyledImage,
  StyledLeftNav,
  StyledLink,
  StyledNavbar,
  StyledRightNav,
} from "./styled";
import { useState } from "react";

const Navbar = ({ setCartOpacity }) => {
  const [opacity, setOpacity] = useState(0);

  const changeOpacity = () => {
    if (opacity === 0) {
      setOpacity(100);
      setCartOpacity(100);
    } else {
      setOpacity(0);
      setCartOpacity(0);
    }
  };

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

          <StyledCartImage
            src="/src/assets/icons8-cart-96.png"
            onClick={changeOpacity}
            opacity={opacity}
          />

      </StyledRightNav>
    </StyledNavbar>
  );
};

export default Navbar;
