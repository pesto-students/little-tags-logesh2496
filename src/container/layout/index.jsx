import React from "react";
import { useSelector } from "react-redux";
import Suggestions from "../../components/Suggestions";
import PropTypes from "prop-types";
import Login from "../Login";
import Menu from "../Menu";

const Layout = () => {
  useSelector((state) => console.log({ state: state.isUserVisited }));

  const isMenuOpen = useSelector((state) =>
    console.log({ state: state.isUserVisited })
  );
  return (
    <div className="layout">
      <header className="App-header">
        <h2>Welcome to little-tags.</h2>
        Website is under construction, please come back later.
        {/* <Login /> */}
        {isMenuOpen && <Menu />}
      </header>
    </div>
  );
};
Layout.propTypes = {};

export default Layout;
