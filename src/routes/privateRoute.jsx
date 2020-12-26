import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAsUserLoggedIn } from "../actions";
import app from "../db/base";

const PrivateRoute = ({ history }) => {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    app.auth().onAuthStateChanged((e) => {
      setUser(e);
      if (e) {
        dispatch(setAsUserLoggedIn(true));
      } else {
        dispatch(setAsUserLoggedIn(false));
      }
    });
  }, []);

  if (user) {
    return <Redirect to="/home" />;
  } else if (!isPending) return <Redirect to="/login" />;
  return <div>Loading...</div>;
};
export default PrivateRoute;
