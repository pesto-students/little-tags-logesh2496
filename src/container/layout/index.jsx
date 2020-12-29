import React from "react";
import "./layout.scss";
import HomePage from "../HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import ProductList from "../ProductList";
import ProductDetails from "../ProductDetails";

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <div className="home-page">
          <Header />
          <Switch>
            <Route exact path={`/home/:searchQuery`} component={ProductList} />
            <Route
              exact
              path="/home/:searchQuery/:productId"
              component={ProductDetails}
            ></Route>
            <Route exact default component={HomePage}></Route>
          </Switch>
          <div className="home-footer"></div>
        </div>
      </div>
    </Router>
  );
};
Layout.propTypes = {};

export default Layout;
