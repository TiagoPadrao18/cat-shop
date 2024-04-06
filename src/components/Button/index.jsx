import { StyledButton } from "./styled";

const Button = ({ text,...buttonProps }) => {
  return <StyledButton {...buttonProps}>{text}</StyledButton>;
};

export default Button;
