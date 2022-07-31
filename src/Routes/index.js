import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Login />
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/home"}>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
