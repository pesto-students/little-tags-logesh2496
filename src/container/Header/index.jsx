import React from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../../actions";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const onMenuClick = () => {
    dispatch(openMenu(true));
  };
  return (
    <div className="home-header">
      <img src="/icons/menu.svg" onClick={onMenuClick} />
      <strong>Little Tags</strong>
      <div className="search-area">
        <img src="/icons/search.svg" />
        <input placeholder="search..."></input>
      </div>
      <div className="person">
        <img src="/icons/person.svg" />
        Logesh
      </div>
      <img src="/icons/shopping_cart.svg" />
    </div>
  );
};
export default Header;
