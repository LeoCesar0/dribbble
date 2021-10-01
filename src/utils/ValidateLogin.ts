
import validateEmail from "./ValidateEmail";

const ValidateLogin = (email: string, password: string) => {

    if (email === "" || password === ""){
        return "Please, fill all fields!"
    }


    if(password.length < 8){
        return "The password must have at least 8 characters"
    }


    if(!validateEmail(email)){
        return "Invalid Email"
    }

  return false

};

export default ValidateLogin
