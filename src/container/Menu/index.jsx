import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { openMenu, setAsUserLoggedOut, setLogInUserInfo } from "../../actions";
import { showAlert } from "../../components/Alert";
import Modal from "../../components/Modal";
import auth from "../../db/auth";
import "./menu.scss";

const { logout } = auth();
const Menu = () => {
  const { displayName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onCloseMenuClick = (e) => {
    e?.stopPropagation();
    dispatch(openMenu(false));
  };

  const gotoAddress = () => {
    onCloseMenuClick();
    history.push("/home/address", { showAddAddress: true });
  };

  const onCategories = (query) => {
    onCloseMenuClick();
    history.push(`/home/${query}`);
  };

  const gotoHome = () => {
    onCloseMenuClick();
    history.push(`/home`);
  };

  const gotoPastOrders = () => {
    onCloseMenuClick();
    history.push("/home/pastOrders");
  };

  const onLogout = () => {
    logout();
    dispatch(setAsUserLoggedOut());
    dispatch(setLogInUserInfo({}));
    showAlert("Thanks for shopping with us!");
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
          {displayName && <div className="name">Hey, {displayName}</div>}
          <div className="categories">
            <header>CATEGORIES</header>
            <div onClick={onCategories.bind(null, "accessories")}>
              Accessories
            </div>
            <div onClick={onCategories.bind(null, "shirts")}>Shirts</div>
            <div onClick={onCategories.bind(null, "pants")}>Pants</div>
            <div onClick={onCategories.bind(null, "jackets")}>Jackets</div>
          </div>
          {displayName && (
            <>
              <div className="user-details">
                <div onClick={gotoPastOrders}>Past Orders</div>
                <div onClick={gotoAddress}>Add Address</div>
              </div>
              <div className="logout" onClick={onLogout}>
                Logout
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
export default Menu;
