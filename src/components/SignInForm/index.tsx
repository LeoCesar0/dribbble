import { useState } from "react";
import { LoginForm, Label } from "./styles";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context/GlobalContext";
import api from "../../services/api";

import { toast } from "react-toastify";
import Input from "../Input";
import Button from "../Button";
import ValidateLogin from "../../utils/ValidateLogin";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const context = useGlobalContext()


  const Login = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const validation = ValidateLogin(email, password)

    if(typeof validation === "string"){
      return toast.error(validation)
    }

    try {
      const { data } = await api.post("/login", {
        email,
        password
      });

      toast.success("Deu certo logar");
      context.setAuth(data)


      history.push("/")
    } catch (error) {
      toast.error("Não logou");
    }
    
  };


  return (
    <LoginForm>
      <h1 className="form-title">Sign in to Dribbble</h1>

      <Label>Username or Email Address</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Label>Password</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button submitForm={Login}>Sign In</Button>
    </LoginForm>
  );
};

export default SignInForm;
