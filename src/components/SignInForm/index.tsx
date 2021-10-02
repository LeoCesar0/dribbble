import { useEffect, useState } from "react";
import { LoginForm, Label } from "./styles";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context/GlobalContext";
import {api} from "../../services/api";

import { toast } from "react-toastify";
import Input from "../Input";
import Button from "../Button";
import ValidateLogin from "../../utils/ValidateLogin";

import CustomToast from "../CustomToast";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const [invalidLoginError, setInvalidLoginError] = useState(false);

  useEffect(()=>{
    if(invalidLoginError === true){
      setTimeout(()=>{setInvalidLoginError(false)}, 4000)
    }
  },[invalidLoginError])

  const history = useHistory();
  const context = useGlobalContext();


  const Login = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true)

    const validation = ValidateLogin(email, password);

    if (typeof validation === "string") {
      setLoading(false)
      return toast.error(validation);
    }

    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      // console.log(data.access_token)
      
      context.setAuth(data);

      history.push("/");
    } catch (error) {
      setInvalidLoginError(true)
    }

    setLoading(false)
  };

  return (
    <LoginForm>
      <h1 className="form-title">Sign in to Dribbble</h1>

      <Label>Email Address</Label>
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

      <Button submitForm={Login} isLoading={loading} >Sign In</Button>

      <CustomToast isActive={invalidLoginError} />

    </LoginForm>
  );
};

export default SignInForm;
