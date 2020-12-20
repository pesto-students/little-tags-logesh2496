import React from "react";
import Modal from "../../components/Modal";
import "./login.scss";
import auth from "../../db/auth";
import { setLogInUserInfo } from "../../actions";
import { useDispatch } from "react-redux";

const { googleAuth } = auth();
const Login = () => {
  const dispatch = useDispatch();

  const onComplete = (data) => {
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
          <button className="google-btn" onClick={onGoogleAuth}>
            Google Account
          </button>
          <button>Facebook Account</button>
        </div>
      </div>
    </Modal>
  );
};
export default Login;
