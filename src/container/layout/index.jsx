import React from "react";
import { useSelector } from "react-redux";
import Suggestions from "../../components/Suggestions";
import PropTypes from "prop-types";
import Login from "../Login";
import Menu from "../Menu";

const Layout = () => {
  const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);

  const menu = useSelector((state) => state.menu);
  return (
    <div className="layout">
      <header className="App-header">
        <h2>Welcome to little-tags.</h2>
        Website is under construction, please come back later.
        {!isUserLoggedIn && <Login />}
        {(menu.isOpen || isUserLoggedIn) && <Menu />}
        {(menu.isOpen || isUserLoggedIn) && <Suggestions />}
      </header>
    </div>
  );
};
Layout.propTypes = {};

export default Layout;
