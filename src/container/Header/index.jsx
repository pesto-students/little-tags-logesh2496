import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { openLogin, openMenu } from "../../actions";
import UseDebounce from "../../hooks/useDebounce";
import "./header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    isUserLoggedIn,
    user: { displayName },
  } = useSelector((state) => state);

  const onMenuClick = () => {
    dispatch(openMenu(true));
  };

  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      history.push(`/home/${e.target.value}`);
    }
  };

  const onPageScroll = (e) => {
    if (window.document.firstElementChild.scrollTop > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const onLoginClick = () => {
    dispatch(openLogin(true));
  };

  const deBounced = UseDebounce(onPageScroll, 0);

  useEffect(() => {
    window.addEventListener("scroll", deBounced);

    return () => {
      window.removeEventListener("scroll", deBounced);
    };
  }, []);

  return (
    <div className={"header-area" + (isScrolled ? " scrolled" : "")}>
      <div className="home-header">
        <img src="/icons/menu.svg" onClick={onMenuClick} alt="menu" />
        <strong>Little Tags</strong>
        <div className="search-area">
          <img src="/icons/search.svg" alt="search" />
          <input placeholder="search..." onKeyDown={onSearchEnter}></input>
        </div>
        <div className="user-area">
          {isUserLoggedIn ? (
            <>
              <div className="person">
                <img src="/icons/person.svg" alt="person" />
                {displayName}
              </div>
              <img className="cart" src="/icons/shopping_cart.svg" alt="cart" />
            </>
          ) : (
            <div className="login-signup" onClick={onLoginClick}>
              Log in / Sign up
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
