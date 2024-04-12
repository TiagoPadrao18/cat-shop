import { StyledFooter, StyledSocialImg, StyledTitle } from "./styled";
import footerLogo from "/src/assets/github.png";
const Footer = () => {
  return (
    <StyledFooter>
      <StyledTitle>Furry Friends Find Home at Our Pet Shop!</StyledTitle>
      <a
        href="https://github.com/TiagoPadrao18?tab=repositories"
        target="_blank"
      >
        <StyledSocialImg src={footerLogo} alt="an git hub icon" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
