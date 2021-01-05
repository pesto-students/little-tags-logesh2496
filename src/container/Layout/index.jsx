import React from "react";
import "./layout.scss";
import HomePage from "../HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Header from "../Header";
import ProductList from "../ProductList";
import ProductDetails from "../ProductDetails";
import { useSelector } from "react-redux";
import Menu from "../Menu";
import DeliverTo from "../DeliverTo";
import Login from "../Login";
import PastOrders from "../PastOrders";
import Cart from "../Cart";
import Footer from "../../components/Footer";

const Layout = () => {
  const {
    menu: { isOpen },
    isLoginModal,
  } = useSelector((state) => state);
  const history = useHistory();

  const onFooterClick = (query) => {
    history.push(`/home/${query}`);
  };

  return (
    <Router>
      <div className="layout">
        <div className="home-page">
          <Header />
          <Switch>
            <Route exact path="/home/address" component={DeliverTo} />
            <Route exact path="/home/pastOrders" component={PastOrders} />
            <Route exact path="/home/cart" component={Cart} />
            <Route
              exact
              path="/home/:searchQuery/:productId"
              component={ProductDetails}
            ></Route>
            <Route exact path={`/home/:searchQuery`} component={ProductList} />
            <Route exact default component={HomePage}></Route>
          </Switch>
          <div className="home-footer">
            <Footer onFooterClick={onFooterClick} />
          </div>
          {isOpen && <Menu />}
          {isLoginModal && <Login />}
        </div>
      </div>
    </Router>
  );
};

Layout.propTypes = {};

export default Layout;
