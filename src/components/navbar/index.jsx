import { useLocation } from "react-router-dom";
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
import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../context/auth";
import { CartContext } from "../../context/cart";

const Navbar = ({ setCartOpacity }) => {
  const [opacity, setOpacity] = useState(0);
  const [opacityImg, setOpacityImg] = useState(0);
  const { username } = useContext(LoginContext);
  const { quantityInCart } = useContext(CartContext);

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
        <StyledName>{username}</StyledName>
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
