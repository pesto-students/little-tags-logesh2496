import React from "react";
import Modal from "../../components/Modal";
import "./login.scss";
import auth from "../../db/auth";
import { openLogin, setAsUserLoggedIn, setLogInUserInfo } from "../../actions";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const { googleAuth } = auth();

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onComplete = (data) => {
    dispatch(setAsUserLoggedIn());
    onClose();
    dispatch(setLogInUserInfo(data));
    history.push("/home");
  };
  const onGoogleAuth = () => {
    googleAuth(onComplete);
  };
  const onClose = () => {
    dispatch(openLogin(false));
  };

  return (
    <Modal>
      <div className="login">
        <img
          className="close"
          src="/icons/close.svg"
          alt="close"
          onClick={onClose}
        />
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
