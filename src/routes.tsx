import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
  
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
  
 function Routes() {
    return (
      <Router>
          <Switch>
            <Route path="/signup">
              <CreateAccount />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
          </Switch>
      </Router>
    );
  }


  export default Routes