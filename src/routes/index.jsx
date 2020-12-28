import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../container/layout";
import Login from "../container/Login";
import ProductList from "../container/ProductList";
import PrivateRoute from "./privateRoute";
import { useSelector } from "react-redux";
import Menu from "../container/Menu";
import DeliverTo from "../container/DeliverTo";
import BrokenLink from "../components/BrokenLink";
import ProductDetails from "../container/ProductDetails";

const Routes = () => {
  const { isOpen } = useSelector((state) => state.menu);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={PrivateRoute}></Route>
          <Route exact path="/home" component={Layout}></Route>
          <Route exact path={`/home/:searchQuery`} component={ProductList} />
          <Route
            exact
            path="/home/:searchQuery/:productId"
            component={ProductDetails}
          ></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/address" component={DeliverTo}></Route>
          <Route exact path="/orders" component={Layout}></Route>
          <Route exact path="/cart" component={Layout}></Route>
          <Route exact default component={BrokenLink}></Route>
        </Switch>
      </Router>
      {isOpen && <Menu />}
    </>
  );
};
export default Routes;
