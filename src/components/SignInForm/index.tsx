import { LoginForm, Label } from "./styles"

import Input from "../Input"
import Button from "../Button"

const SignInForm: React.FC = () => {
    return (
        <LoginForm>
            <h1 className="form-title">Sign in to Dribbble</h1>

            <Label >Username or Email Address</Label>
            <Input type="email" value="" />
            <Label>Password</Label>
            <Input type="email" value="" />

            <Button >Sign In</Button>

        </LoginForm>
    )
}


export default SignInForm