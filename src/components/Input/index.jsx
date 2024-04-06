import { StyledInput, StyledLabel } from "./styled";

const Input = ({ label, ...inputProps }) => {
  return (
    <StyledLabel>
        {label}
      <StyledInput {...inputProps}/>
    </StyledLabel>
  );
};

export default Input;
