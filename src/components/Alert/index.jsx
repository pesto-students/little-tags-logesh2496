import React, { useEffect, useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import "./alert.scss";

let showAlertDialog;
let hideAlertDialog;

export const showAlert = (message) => {
  showAlertDialog(message);
};
export const hideAlert = () => {
  hideAlertDialog();
};

const Alert = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const onShowAlert = (content) => {
    setShow(true);
    setMessage(content);
  };
  const onHideAlert = () => setShow(false);

  useEffect(() => {
    showAlertDialog = onShowAlert;
    hideAlertDialog = onHideAlert;
  }, []);

  return (
    <Modal>
      {show && (
        <div className="alert">
          <div>
            {message}
            <Button onClick={onHideAlert}>Ok</Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Alert;
