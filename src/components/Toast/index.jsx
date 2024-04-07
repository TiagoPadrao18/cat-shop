
import { SVGContainer, StyledToast } from "./styled";
const Toast = ({ message, user, location, svg, scheme }) => {
  return (
    <StyledToast scheme={scheme}>
      <SVGContainer>{svg}</SVGContainer>
      <p>{message}</p>
      {user && <p>User: {user}</p>}
      {location && <p>Location: {location}</p>}
    </StyledToast>
  );
};

export default Toast;
