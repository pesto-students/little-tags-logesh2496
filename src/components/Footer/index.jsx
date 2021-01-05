import React from "react";
import "./footer.scss";
import PropTypes from "prop-types";

const Footer = ({ onFooterClick }) => {
  return (
    <div className="footer-wrapper">
      <div className="contact">
        <header>Contact Info</header>
        <div>
          <p>Phone: (+91) 9876 543 210</p>
          <p>
            Address: 1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052,
            United State
          </p>
        </div>
      </div>
      <div className="categories">
        <header>Categories</header>
        <div>
          <p onClick={onFooterClick.bind(null, "accessories")}>
            Accessories (45)
          </p>
          <p onClick={onFooterClick.bind(null, "Jeans")}>Jeans (278)</p>
          <p onClick={onFooterClick.bind(null, "Tops")}>Tops (64)</p>
          <p onClick={onFooterClick.bind(null, "Jackets")}>Jackets (3)</p>
        </div>
      </div>
      <div>
        <header>Let’s stay in touch</header>
        <div className="subscribe">
          <input />
          <div>SUBSCRIBE</div>
        </div>
        <p>Keep up to date with our latest news and special offers.</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  onFooterClick: PropTypes.func.isRequired,
};

export default Footer;
