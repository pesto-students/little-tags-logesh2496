import React from "react";
import PropTypes from "prop-types";
import "./thank-you-note.scss";
import UseRouterClass from "../../hooks/useRouterClass";

const ThankYouNote = ({ clickOnContinue }) => {
  UseRouterClass();
  return (
    <div className="thank-note">
      <img className="smiley" src="/images/smiley.jpg" alt=":)" />
      <header>Thank you for shopping with us</header>
      <div className="continue-shopping" onClick={clickOnContinue}>
        CONTINUE SHOPPING
      </div>
    </div>
  );
};
ThankYouNote.propTypes = {
  clickOnContinue: PropTypes.func.isRequired,
};
export default ThankYouNote;
