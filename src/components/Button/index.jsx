import React, { Children, PureComponent } from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  return <button {...props} className={"lt-buttons " + props.className} />;
};
export default Button;
