import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./home-page.scss";
import InDemand from "../InDemand";
import { useHistory } from "react-router-dom";
import { setAsUserLoggedIn, setLogInUserInfo } from "../../actions";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (history.location.state) {
      const { user } = JSON.parse(history.location.state);
      if (user) {
        dispatch(setAsUserLoggedIn());
        dispatch(setLogInUserInfo(user));
      } else {
        history.push("/");
      }
    } else {
      history.push("/");
    }
  }, []);

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
