import React, { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "../Menu";
import "./layout.scss";
import HomePage from "../HomePage";

const Layout = () => {
  const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);
  const { isOpen } = useSelector((state) => state.menu);

  return (
    <div className="layout">
      <HomePage />
      {isOpen && <Menu />}
    </div>
  );
};
Layout.propTypes = {};

export default Layout;
