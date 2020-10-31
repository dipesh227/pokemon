import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const { showPerPageove, onPaginationChange, movesCount } = props;
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPageove * counter;
    onPaginationChange(value - showPerPageove, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  const onButtonClick = (type) => {
    if (type === "pre") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(movesCount / showPerPageove) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <>
      <ul className="pagination pagination-lg d-flex justify-content-around">
        <li className="page-item ">
          <button
            className="page-link btn lifont my-1"
            onClick={() => onButtonClick("pre")}
          >
            Previous
          </button>
        </li>
        <li className="page-item ">
          <button
            className="page-link btn lifont my-1"
            onClick={() => onButtonClick("next")}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
