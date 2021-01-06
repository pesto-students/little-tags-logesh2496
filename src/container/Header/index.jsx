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
    cart,
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
  const gotoCart = () => {
    history.push("/home/cart");
  };
  const gotoHome = () => {
    history.push("/home");
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
        <img
          className="menu-icon"
          src="/icons/menu.svg"
          onClick={onMenuClick}
          alt="menu"
        />
        <strong onClick={gotoHome}>Little Tags</strong>
        <div className="search-area">
          <label htmlFor="search">
            <img src="/icons/search.svg" alt="search" />
          </label>
          <input
            placeholder="search..."
            onKeyDown={onSearchEnter}
            id="search"
          />
        </div>
        <div className="user-area" title={displayName}>
          {displayName ? (
            <>
              <div className="person">
                <img src="/icons/person.svg" alt="person" />
                {displayName}
              </div>
              <div className="cart" onClick={gotoCart}>
                <img src="/icons/shopping_cart.svg" alt="cart" />
                {cart.length > 0 && (
                  <div className="cart-count">{cart.length}</div>
                )}
              </div>
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
