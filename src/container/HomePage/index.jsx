import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import "./home-page.scss";
import InDemand from "../InDemand";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ProductList from "../ProductList";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="closet">
        <img src="/closet1.jpg" width="100%" height="100%"></img>
        <div className="overlay">
          <div>
            Online Flee Market for Clothes
            <div className="sub-title">
              <span></span>Its time to recycle<span></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <InDemand />
      </div>
    </div>
  );
};
HomePage.propTypes = {};

export default HomePage;
