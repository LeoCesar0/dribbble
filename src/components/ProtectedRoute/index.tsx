import { Redirect, Route, RouteProps } from "react-router-dom"
import { useGlobalContext } from "../../context/GlobalContext"



const ProtectedRoute: React.FC<RouteProps> = ({children, ...rest}) => {
    const {auth} = useGlobalContext()

    if(auth){
        return(
           <Route {...rest}>
               {children}
           </Route>
        )
    } else{
        return <Redirect to="/signin" />
    }
}


export default ProtectedRoute