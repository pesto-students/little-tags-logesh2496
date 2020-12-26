import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../actions";
import Modal from "../../components/Modal";
import "./menu.scss";

const Menu = () => {
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onCloseMenuClick = () => {
    dispatch(openMenu(false));
  };
  return (
    <Modal>
      <div className="menu-wrapper">
        <div className="menu">
          <div className="title">
            <img src="/icons/close.svg" onClick={onCloseMenuClick} />
            <div>Little Tags</div>
          </div>
          <div className="name">Hey, {name || "Logesh"}</div>
          <div className="categories">
            <header>CATEGORIES</header>
            <div>Accessories</div>
            <div>Shirts</div>
            <div>Pants</div>
            <div>Jackets</div>
          </div>
          <div className="user-details">
            <div>Past Orders</div>
            <div>Add Address</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Menu;
