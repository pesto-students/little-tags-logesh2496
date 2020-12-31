import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../container/layout";
import Login from "../container/Login";
import PrivateRoute from "./privateRoute";
import BrokenLink from "../components/BrokenLink";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={PrivateRoute}></Route>
          <Route path="/home" component={Layout}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/orders" component={Layout}></Route>
          <Route exact path="/cart" component={Layout}></Route>
          <Route exact default component={BrokenLink}></Route>
        </Switch>
      </Router>
    </>
  );
};
export default Routes;
