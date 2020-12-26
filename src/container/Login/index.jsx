import React from "react";
import Modal from "../../components/Modal";
import "./login.scss";
import auth from "../../db/auth";
import { setAsUserLoggedIn, setLogInUserInfo } from "../../actions";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";

const { googleAuth } = auth();

const Login = () => {
  const dispatch = useDispatch();

  const onComplete = (data) => {
    dispatch(setAsUserLoggedIn());
    dispatch(setLogInUserInfo(data));
    alert(`Welcome ${data.name} to little-tags!`);
  };
  const onGoogleAuth = () => {
    googleAuth(onComplete);
  };

  return (
    <Modal>
      <div className="login">
        <div className="buttons-container">
          <div className="login-header">Log in / Sign up</div>
          <div className="helper">using your</div>
          <Button className="google-btn" onClick={onGoogleAuth}>
            Google Account
          </Button>
          <Button className="facebook-btn">Facebook Account</Button>
        </div>
      </div>
    </Modal>
  );
};
export default Login;
