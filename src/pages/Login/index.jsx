import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import {
  StyledFormLogin,
  StyledInputContainer,
  StyledMainContainer,
  StyledTitle,
  StyledButton,
} from "./styled";
import { loginUserAction } from "../../store/user/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get("userName");
    localStorage.setItem("userName", userName);
    dispatch(loginUserAction(userName));
    navigate("/public/home");
  };

  return (
    <StyledMainContainer>
      <StyledFormLogin onSubmit={submitLogin}>
        <StyledTitle>Welcome</StyledTitle>
        <StyledInputContainer>
          <Input
            label="UserName"
            placeholder="username"
            name="userName"
            required
          />
          <Input
            label="Password"
            placeholder="password"
            name="password"
            type="password"
            required
          />
          <StyledButton>Login</StyledButton>
        </StyledInputContainer>
      </StyledFormLogin>
    </StyledMainContainer>
  );
};

export default LoginPage;
