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
          <button onClick={onGoogleAuth}>Google</button>
          <button>Facebook</button>
        </div>
      </div>
    </Modal>
  );
};
export default Login;
