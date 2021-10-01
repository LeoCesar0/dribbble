import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
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
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }


  export default Routes