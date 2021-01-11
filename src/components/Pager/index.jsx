import React from "react";
import "./pager.scss";
import PropTypes from "prop-types";

const Pager = ({
  onNextPage,
  onPreviousPage,
  currentPage,
  totalNoOfPages,
  setPageByNo,
}) => {
  return (
    <div className="pager">
      <div
        className={"previous" + (currentPage === 1 ? " disabled" : "")}
        onClick={onPreviousPage}
        title="previous"
      >
        <span className="symbol">&lt;&lt;</span>Previous
      </div>
      <div>
        <div className="pagination-content">
          {new Array(totalNoOfPages).fill("a").map((page, i) => (
            <div
              className={"page-no" + (currentPage === i + 1 ? " selected" : "")}
              onClick={setPageByNo.bind(null, i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div
        className={"next" + (currentPage === totalNoOfPages ? " disabled" : "")}
        onClick={onNextPage}
        title="next"
      >
        Next<span className="symbol">&gt;&gt;</span>
      </div>
    </div>
  );
};
Pager.propTypes = {
  onNextPage: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalNoOfPages: PropTypes.number.isRequired,
  setPageByNo: PropTypes.func.isRequired,
};
export default Pager;
