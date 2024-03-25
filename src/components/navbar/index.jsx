import { StyledLink, StyledNavbar, StyledRightNav } from "./styled";

const Navbar = () => {
  const NavBarLinks = [
    {
      title: "Home",
      url: "/home",
    },
    {
        title:"Shop",
        url: "/shop"
    }
  ];

  const navElements = NavBarLinks.map((item) => (
    <StyledLink to={item.url} key={item.title}>
      {item.title}
    </StyledLink>
  ));
  

  return (
    <StyledNavbar>
      <StyledRightNav>{navElements}</StyledRightNav>
    </StyledNavbar>
  );
};

export default Navbar;
