import React from "react";
import "./home-page.scss";
import InDemand from "../InDemand";

const HomePage = () => {
  return (
    <>
      <div className="closet">
        <img
          src="/closet1.jpg"
          width="100%"
          height="100%"
          alt="background"
        ></img>
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
    </>
  );
};
HomePage.propTypes = {};

export default HomePage;
