import { useEffect, useState } from "react";
import { LoginForm, Label } from "./styles";
import api from "../../services/api";

import Input from "../Input";
import Button from "../Button";
import { toast } from "react-toastify";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      console.log({ data });
      toast.success("Deu certo logar");
    } catch (error) {}
    toast.error("Não logou");
  };

  useEffect(()=>{

    
  },[])

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
