import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import Input from "../../components/Input";
import { StyledFormLogin, StyledInputContainer, StyledMainContainer, StyledTitle,StyledButton } from "./styled";
import { LoginContext } from "../../context/auth";


const LoginPage = () => {
    const {setUsername} = useContext(LoginContext);
const navigate = useNavigate();
    const submitLogin = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const userName = formData.get("userName");
        setUsername(userName);
        navigate("/public/home");

    }


    return (
        <StyledMainContainer>
            <StyledFormLogin onSubmit={submitLogin}>
                <StyledTitle>Welcome</StyledTitle>
                <StyledInputContainer>
                <Input label="UserName" placeholder="username" name="userName" required/>
            <Input label="Password" placeholder="password" name ="password" type="password" required/>
            <StyledButton>Login</StyledButton>
                </StyledInputContainer>
          

            </StyledFormLogin>
        </StyledMainContainer>
    )
}


export default LoginPage;