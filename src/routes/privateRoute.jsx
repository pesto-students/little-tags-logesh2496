import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAsUserLoggedIn } from "../actions";
import app from "../db/app";

const PrivateRoute = ({ history }) => {
  const [user, setUser] = useState(null);
  const [isLoginWindow, setIsLoginWindow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    app.auth().onAuthStateChanged((e) => {
      setUser(e);
      if (e) {
        dispatch(setAsUserLoggedIn(true));
      } else {
        setIsLoginWindow(true);
        dispatch(setAsUserLoggedIn(false));
      }
    });
  }, []);

  if (user) {
    return (
      <Redirect to={{ pathname: "/home", state: JSON.stringify({ user }) }} />
    );
  } else if (isLoginWindow) return <Redirect to="/login" />;
  return <div>Loading...</div>;
};
export default PrivateRoute;
