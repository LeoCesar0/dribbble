import { useState } from "react";
import { LoginForm, Label, NameContainer } from "./styles";
import api from "../../services/api";

import { toast } from "react-toastify";
import Input from "../Input";
import Button from "../Button";

import ValidateCreateAccount from "../../utils/ValidateCreateAccount";

export interface IFormfields {
  name: string;
  email: string;
  username: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const CreateAccount = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    const validation = ValidateCreateAccount(name, username, email, password)

    if (typeof validation === "string"){

      toast.error(validation)
      return
    }

    try {
      await api.post("/users", {
        name,
        email,
        username,
        password,
      });

      toast.success("Account created succesfully")
    } catch (error) {
      toast.error("Failed to create account")
    }
  };



  return (
    <LoginForm>
      <h1 className="form-title">Sign up to Dribbble</h1>

      <NameContainer>
        <div>
          <Label>Full Name</Label>
          <Input
            type="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <Label>Username</Label>
          <Input
            type=" name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </NameContainer>

      <Label>Email</Label>
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

      <Button submitForm={CreateAccount}>Sign In</Button>
    </LoginForm>
  );
};

export default SignUpForm;
