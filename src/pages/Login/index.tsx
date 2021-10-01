import SignInForm from "../../components/SignInForm";
import { Container, FormContainer, MainContainer } from "./styles";

import AuthSidebar from "../../components/AuthSidebar";

function Login() {
  return (
    <Container>
      <AuthSidebar />
      <MainContainer>
        <FormContainer>
          <SignInForm />
        </FormContainer>
      </MainContainer>
    </Container>
  );
}

export default Login;
