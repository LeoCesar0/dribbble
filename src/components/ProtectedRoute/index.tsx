import { useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context/GlobalContext";

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { auth } = useGlobalContext();

  useEffect(() => {
    if (!auth) {
      toast.error("Please, sign in to access this page.");
    }
  }, [auth]);

  if (auth) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/signin" />;
  }
};

export default ProtectedRoute;
