import { Container, MainContainer } from "./styles";
import { AuthFormContainer } from "../../components/AuthFormContainer";

import AuthSidebar from "../../components/AuthSidebar";


const AuthLayout: React.FC = ({children}) => {
  return (
    <Container>
      <AuthSidebar />
      <MainContainer>
        <AuthFormContainer>

          {children}

        </AuthFormContainer>
      </MainContainer>
    </Container>
  );
}

export default AuthLayout;
