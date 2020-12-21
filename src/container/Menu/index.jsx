import React from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import "./menu.scss";

const Menu = () => {
  const { name } = useSelector((state) => state.userData);
  return (
    <Modal>
      <div className="menu-wrapper">
        <div className="menu">
          <div className="title">Little Tags</div>
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
