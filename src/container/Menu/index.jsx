import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { openMenu } from "../../actions";
import Modal from "../../components/Modal";
import auth from "../../db/auth";
import "./menu.scss";

const { logout } = auth();
const Menu = () => {
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onCloseMenuClick = () => {
    dispatch(openMenu(false));
  };

  const gotoAddress = () => {
    onCloseMenuClick();
    history.push("/home/address");
  };
  const onCategories = (query) => {
    onCloseMenuClick();
    history.push(`/home/${query}`);
  };
  const gotoHome = () => {
    onCloseMenuClick();
    history.push(`/home`);
  };
  const onLogout = () => {
    const isLogout = prompt("Are you sure want to logout?");
    if (isLogout) {
      logout();
    }
  };

  return (
    <Modal>
      <div className="menu-wrapper">
        <div className="menu">
          <div className="title" onClick={gotoHome}>
            <img
              src="/icons/close.svg"
              onClick={onCloseMenuClick}
              alt="close"
            />
            <div>Little Tags</div>
          </div>
          <div className="name">Hey, {name || "Logesh"}</div>
          <div className="categories">
            <header>CATEGORIES</header>
            <div onClick={onCategories.bind(null, "accessories")}>
              Accessories
            </div>
            <div onClick={onCategories.bind(null, "shirts")}>Shirts</div>
            <div onClick={onCategories.bind(null, "pants")}>Pants</div>
            <div onClick={onCategories.bind(null, "jackets")}>Jackets</div>
          </div>
          <div className="user-details">
            <div>Past Orders</div>
            <div onClick={gotoAddress}>Add Address</div>
          </div>
          <div className="logout" onClick={onLogout}>
            Logout
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Menu;
