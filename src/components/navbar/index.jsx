import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import cartImage from "/src/assets/icons8-cart-96.png";
import logoutImage from "/src/assets/logout50.png"
import {
  ResponsiveBurger,
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
  Trace,
  MenuMobile,
  TopMenu,
  CloseMobile,
  ContentMobile,
  StyledLinks,
  StyledCartImagee,
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
  const navigate = useNavigate();

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
      title: "About",
      url: "/public/about",
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

  const [display, setDisplay] = useState("none");

  const renderMenuMobile = () => {
    setDisplay(display === "none" ? "block" : "none");
  };

  const renderMenuAndLogout = () => {
    localStorage.removeItem("userName");
    setDisplay(display === "none" ? "block" : "none");
  };

  const logout = () => {
    localStorage.removeItem("userName");
    navigate("/public/login");
    setDisplay(display === "none" ? "block" : "none");
  };

  return (
    <StyledNavbar>
      <StyledLeftNav>
        <StyledLink to="/public/home">
          <StyledImage src={logo} />
        </StyledLink>

        <StyledLink to="/public/home">PET-SHOP</StyledLink>
      </StyledLeftNav>
      <StyledRightNav>
        {navElements}
        <StyledName>
          {username !== null ? (
            username
          ) : (
            <StyledLink to="/login">Login</StyledLink>
          )}
        </StyledName>

        <StyledCartImage
          src={cartImage}
          onClick={changeOpacity}
          opacity={opacity}
        />
        <StyledCartImagee
          src={logoutImage}
          onClick={() => logout()}
        />

        <ResponsiveBurger onClick={() => renderMenuMobile()}>
          <Trace />
          <Trace />
          <Trace />
        </ResponsiveBurger>
        <MenuMobile display={display}>
          <TopMenu>
            <CloseMobile onClick={() => renderMenuMobile()}>X</CloseMobile>
          </TopMenu>
          <ContentMobile>
            <StyledLinks onClick={() => renderMenuMobile()} to="/public/home">
              Home
            </StyledLinks>
            <StyledLinks onClick={() => renderMenuMobile()} to="/public/about">
          About
            </StyledLinks>
            <StyledLinks onClick={() => renderMenuMobile()} to="/public/shop">
              Shop
            </StyledLinks>
            <StyledLinks
              onClick={() => renderMenuMobile()}
              to="/public/checkout"
            >
              Checkout
            </StyledLinks>
            <StyledLinks onClick={() => renderMenuAndLogout()} to="/login">
              Logout
            </StyledLinks>
          </ContentMobile>
        </MenuMobile>
        <TestDiv>
          <StyledCartCount onClick={changeOpacity} opacity={opacityImg}>
            {quantityInCart}
          </StyledCartCount>
        </TestDiv>
      </StyledRightNav>
    </StyledNavbar>
  );
};

export default Navbar;
