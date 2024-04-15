import { SVGContainer, StyledToast } from "./styled";
const ToastError = ({ message, user, location, svg }) => {
  return (
    <StyledToast>
      <SVGContainer>{svg}</SVGContainer>
      <p>{message}</p>
      {user && <p>User: {user}</p>}
      {location && <p>Location: {location}</p>}
    </StyledToast>
  );
};

export default ToastError;
