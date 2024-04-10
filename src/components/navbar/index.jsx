import { Link, useLocation } from "react-router-dom";

import {
  StyledCartCount,
  StyledCartDiv,
  StyledCartImage,
  StyledImage,
  StyledLeftNav,
  StyledLink,
  StyledName,
  StyledNavbar,
  StyledRightNav,
  TestDiv,
} from "./styled";
import { useState, useEffect } from "react";
import { getUsername } from "../../store/user/selectors";
import { getQuantityInCart } from "../../store/cart/selectors";
import { useSelector } from "react-redux";

const Navbar = ({ setCartOpacity }) => {
  const [opacity, setOpacity] = useState(0);
  const [opacityImg, setOpacityImg] = useState(0);
  const username = localStorage.getItem("userName");
  const quantityInCart = useSelector(getQuantityInCart);

  const changeOpacity = () => {
    if (opacity === 0) {
      setOpacity(100);
      setCartOpacity(100);
    } else {
      setOpacity(0);
      setCartOpacity(0);
    }
  };

  useEffect(() => {
    if (quantityInCart > 0) {
      setOpacityImg(100);
    } else {
      setOpacityImg(0);
    }
  }, [quantityInCart]);

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
        <StyledLink to="/public/home">
          <StyledImage src="/src/assets/logo.png" />
        </StyledLink>

        <StyledLink to="/public/home">PET-SHOP</StyledLink>
      </StyledLeftNav>
      <StyledRightNav>
        {navElements}
        <StyledName>{username !== null ? username : <StyledLink to="/login">Login</StyledLink>}</StyledName>
        <StyledCartDiv>
          <StyledCartImage
            src="/src/assets/icons8-cart-96.png"
            onClick={changeOpacity}
            opacity={opacity}
          />
          <TestDiv>
            <StyledCartCount onClick={changeOpacity} opacity={opacityImg}>
              {quantityInCart}
            </StyledCartCount>
          </TestDiv>
        </StyledCartDiv>
      </StyledRightNav>
    </StyledNavbar>
  );
};

export default Navbar;
