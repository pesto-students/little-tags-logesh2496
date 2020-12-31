import React from "react";
import "./broken-link.scss";

const BrokenLink = () => {
  return (
    <div className="broken-link">
      You have followed a broken link or the information is not currently
      avaialble!
      <img src="/images/dog.gif" alt=":)" />
    </div>
  );
};

export default BrokenLink;
