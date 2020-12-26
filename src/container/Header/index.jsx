import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { openMenu } from "../../actions";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();
  const onMenuClick = () => {
    dispatch(openMenu(true));
  };
  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      history.push(`/home/${e.target.value}`);
    }
  };
  return (
    <div className="header-area">
      <div className="home-header">
        <img src="/icons/menu.svg" onClick={onMenuClick} />
        <strong>Little Tags</strong>
        <div className="search-area">
          <img src="/icons/search.svg" />
          <input placeholder="search..." onKeyDown={onSearchEnter}></input>
        </div>
        <div className="person">
          <img src="/icons/person.svg" />
          Logesh
        </div>
        <img className="cart" src="/icons/shopping_cart.svg" />
      </div>
    </div>
  );
};
export default Header;
