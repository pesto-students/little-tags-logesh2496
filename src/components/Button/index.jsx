import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  return <button {...props} className={"lt-buttons " + props.className} />;
};

Button.propTypes = {
  props: PropTypes.object,
};

export default Button;
