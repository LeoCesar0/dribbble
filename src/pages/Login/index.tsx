import SignInForm from "../../components/SignInForm";
import { Container, FormContainer, MainContainer, SideContainer } from "./styles";

function Login() {
  return (
    <Container>
      <SideContainer>
      </SideContainer>
      <MainContainer>
        <FormContainer>
          <SignInForm />
        </FormContainer>
      </MainContainer>
    </Container>
  );
}

export default Login;
